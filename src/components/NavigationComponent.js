import { Link, NavLink, useNavigate } from "react-router-dom";

function BedroomPage() {

    return (
        <div className="App">
           navigation works
            <NavLink to="home">home</NavLink>
            <NavLink to="contact">contact</NavLink>
        </div>

    );
}

export default BedroomPage;
