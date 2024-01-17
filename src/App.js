import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";
import BedroomPage from "./components/BedroomPage";
import HomeIndexPage from "./components/HomeIndexPage";
import RootPage from "./components/RootPage";
import ErrorPage from "./components/ErrorPage";

const routerConfig = createBrowserRouter([
    {
        path: '', element: <RootPage/>,
        children: [
            {
                path: 'home', element: <HomePage/>, children: [
                    {path: '', element: <HomeIndexPage/>},
                    {path: 'bedroom', element: <BedroomPage/>}
                ]
            },
            {path: 'contact', element: <ContactPage/>},
            {path: '*', element: <ErrorPage/>}
        ]
    }

])

function App() {
    return (
        <div>
            <RouterProvider router={routerConfig}/>
        </div>

    );
}

export default App;
