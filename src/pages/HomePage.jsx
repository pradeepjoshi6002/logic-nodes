import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import Window from "../components/window/Window";

const HomePage = () => {
  return (
    <div>
      <Topbar />
      <div className="flex h-[95vh]">
        <Sidebar />
        <Window />
      </div>
    </div>
  );
};

export default HomePage;
