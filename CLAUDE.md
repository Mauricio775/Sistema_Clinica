# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — production build (`dist/`)
- `npm run lint` — ESLint (flat config; react-hooks + react-refresh rules)
- `npm run preview` — serve the production build

There is no test runner configured.

## Stack

React 19 + Vite + Tailwind CSS v4 (via `@tailwindcss/vite`; `src/index.css` is just `@import "tailwindcss"`), React Router v7. Plain JS/JSX, no TypeScript. UI text, identifiers and data are in Spanish — keep new code and labels in Spanish to match.

## Architecture

Front-end-only prototype of a university clinic system (one module per clinical area). There is no backend or persistence: all state is in-memory and resets on reload.

**Roles instead of auth.** `RolContext` (`useRol`) holds `rolActual`, defaulting to Archivo. `data/roles.js` defines the `ROL_*` constants and the `modulos` list (name, route, role). `Sidebar` shows only the module whose `rol` equals `rolActual`, and `RutaProtegida` redirects to `/` if the current role doesn't match the route's `rolRequerido`. Each module has exactly one role. To add a module: add a `ROL_*` constant + `modulos` entry in `roles.js`, a page in `src/pages/`, and a `RutaProtegida`-wrapped `<Route>` in `App.jsx`.

**Shared patient records.** `ExpedientesContext` (`useExpedientes`) holds the `expedientes` array (seeded from `data/expedientesIniciales.js`, which merges a blank field template `camposVacios` into each base record) and `actualizarExpediente(cuenta, datos)`, which shallow-merges into the record matching `cuenta`. Records are keyed by `cuenta`.

**Patient flow / referral.** Archivo (reception: search or create an expediente) → PreClínica (capture vitals/history, then diagnosis) → PreClínica sets `remitirA` to a specialty name string (`"Fisioterapia"`, `"Nutrición"`, `"Ginecología"`, `"Psicología"`, …). PreClínica's queue is expedientes with no `remitirA`; each specialty module lists expedientes where `exp.remitirA === "<Specialty>"`. The `remitirA` string must match exactly between `DiagnosticoStep`, the seed data and the specialty filter.

**Module structure.** Pages in `src/pages/` are thin. Multi-step modules (Archivo, PreClínica) keep `pasoActual` / `maxPasoAlcanzado` / selected `cuenta` state in the page and render `components/<modulo>/*Step.jsx` with `StepTabs`. Fisioterapia and Nutrición use a waiting-list step → `FichaPreclinicaCompleta` (read-only PreClínica summary) → evaluation form; Fisioterapia's form is split into accordion "incisos" under `components/fisioterapia/incisos/`. Ginecología/Psicología use `Lista*` → `Formulario*` driven by question banks in `data/preguntas*.js`. Odontología and Medicina General are standalone forms that do not read `expedientes` or the referral list (they're modelled on paper forms).

**Gotchas.**
- Context objects live in separate `*ContextInstance.js` files (imported by both the Provider and the hook) to satisfy the react-refresh lint rule; keep that split.
- `components/Nutricion/FichaPreclinicaCompleta.jsx` is a copy of the Fisioterapia one, and Ginecología imports the Fisioterapia copy — changes to the ficha may need applying in both places.
- `data/mockData.js` feeds only the Dashboard, and `data/mockPacientes.js` is the patient list Archivo searches; neither is connected to `ExpedientesContext`, whose seed is `expedientesIniciales.js`.
