import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavigationBar from "../NavigationBar/NavigationBar";

const RootLayout = () =>{
    return (
        <>
            <NavigationBar/>
            <Outlet/>
            <Footer/>
        </>
    )
}
export default RootLayout;