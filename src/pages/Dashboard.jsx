import GreetingCard from "../components/GreetingCard";
import { user, fechaHoy } from "../data/mockData";

function Dashboard() {
  return (
    <div className="space-y-6">
      <GreetingCard nombre={user.nombre} fecha={fechaHoy} cuenta={user.cuenta} />
    </div>
  );
}

export default Dashboard;