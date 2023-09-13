import Games from "./components/Games/Games";
import appStyles from "./App.module.scss";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className={appStyles.container}>
      <Sidebar />
      <Games />
    </div>
  );
}

export default App;
