import { Outlet } from "react-router-dom";

function HomePage() {
    return (
        <div className="App">
            <Outlet/>
        </div>
    );
}

export default HomePage;
