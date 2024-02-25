import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../Component/NavBar/NavBar";
import Home from "../Component/Home/Home";
import News from "../Component/News/News";
import Sport from "../Component/Sport/Sport";
import Earth from "../Component/Earth/Earth";
import Travel from "../Component/Travel/Travel";
import Economie from "../Component/Economie/Economie";

function AppRoute (){
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/News" element={<News/>}/>
                <Route path="/Sport" element={<Sport/>}/>
                <Route path="/Earth" element={<Earth/>}/>
                <Route path="/Travel" element={<Travel/>}/>
                <Route path="/Economie" element={<Economie/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoute;