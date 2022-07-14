import "./App.css";
import { AllHumans } from "./components/AllHumans";
import { AllTasks } from "./components/AllTasks";

function App() {
  return (
    <div className="App">
      <main className="flex justify-between w-3/5 mx-auto mt-5">
        <AllHumans />
        <AllTasks />
      </main>
    </div>
  );
}

export default App;
