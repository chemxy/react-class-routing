import { Link, NavLink, useNavigate } from "react-router-dom";

function BedroomPage() {

    const nav = useNavigate();

    function navigateToHome() {
        nav('/home')
    }

    return (
        <div className="App">
            bedroom page works
            <NavLink to="../" className={({isActive}) => (isActive ? 'classA' : 'classB')}>
                <button>home</button>
            </NavLink>
            <div>
                <button onClick={navigateToHome}>navigate to home page</button>
            </div>
        </div>

    );
}

export default BedroomPage;
