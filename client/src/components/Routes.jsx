import { Route, Routes} from "react-router-dom";
import Login from "./Login/Login"
import Coffeeform from "./Coffeeform/Coffeeform"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path ="/" element={<Login/>}/>
            <Route path ="/home" element={<Coffeeform/>}/>3
            <Route path ="*" element={<h1>Error 404: Page not found!</h1>}/>
        </Routes>
    )
}
export default AppRoutes;