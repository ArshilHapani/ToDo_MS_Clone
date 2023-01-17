import { BrowserRouter } from "react-router-dom";
import Notes from "./components/Notes/Notes";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="Parent">
        <Sidebar />
        <Notes />
      </div>
    </BrowserRouter>
  );
}

export default App;
