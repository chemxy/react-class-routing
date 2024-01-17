import { Outlet } from "react-router-dom";
import NavigationComponent from "./NavigationComponent";

function RootPage() {
    return (
        <div className="App">
            <NavigationComponent />
            <Outlet/>
        </div>
    );
}

export default RootPage;
