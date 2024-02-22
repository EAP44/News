import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../Component/NavBar/NavBar";
import Home from "../Component/Home/Home";

function AppRoute (){
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/News" element={()=>{}}/>
                <Route path="/Sport" element={()=>{}}/>
                <Route path="/Earth" element={()=>{}}/>
                <Route path="/Travel" element={()=>{}}/>
                <Route path="/economie" element={()=>{}}/>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoute;