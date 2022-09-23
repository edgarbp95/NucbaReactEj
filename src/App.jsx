import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import PokeRoute from "./routes/PokeRoute";
import TodoRoute from "./routes/TodoRoute";


function App() {
 

  return (
    <div className="h-screen">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todolist" element={<TodoRoute />}/>
          <Route path="/pokeapi" element={<PokeRoute />}/>
        </Routes>
    </div>
  );
}

export default App;
