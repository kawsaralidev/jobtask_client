import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import SectorData from "./Components/Home/SectorData/SectorData";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/sectorData" element={<SectorData />}></Route>
                </Routes>
            </BrowserRouter>
            ,
        </div>
    );
}

export default App;
