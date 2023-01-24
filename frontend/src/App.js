import { BrowserRouter } from "react-router-dom";
import Notes from "./components/Notes/Notes";
import Sidebar from "./components/Sidebar/Sidebar";
import "animate.css";
function App() {
  return (
    <BrowserRouter>
      <div className="Parent" id="main">
        <Sidebar />
        <Notes />
      </div>
    </BrowserRouter>
  );
}

export default App;

//TODO:Make note deletable and popups..
