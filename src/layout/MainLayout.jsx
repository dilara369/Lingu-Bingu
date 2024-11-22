import { Outlet } from "react-router-dom";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import SnowfallEffect from "../component/SnowfallEffect";
import "../component/snowfall.css"
const MianLayout = () => {

      
    return (
        <div className="bg-custom-gradient">
            <SnowfallEffect/>
            {/* nabver  */}
         <Navbar/>
         <section className="w-11/12 mx-auto"> 
            <Outlet></Outlet>
            </section>
         <Footer/>
        </div>
    );
};

export default MianLayout;

