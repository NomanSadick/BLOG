import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <NavLink className="navbar-brand" to="/">My Blog</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/create">Create Post</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
