import "./Nav.scss"
import NavItem from "../NavItem/NavItem"
import plantAppLogo from "../../assets/plant-app.png";
import { Link } from "react-router-dom";
export default function Nav({filteredPlantList}) {

    return (
        <nav className="nav">
            {/* Logo links back to home */}
            <Link to={"/"}><img className="nav__logo" src={plantAppLogo}></img></Link>
            <ul className="nav__list">
                {/* map the array filtered plant list */}
                {filteredPlantList.map((plant) => {
                    return <NavItem key={plant.id} id={plant.id} plantName={plant.name}/>
                 })}
            </ul>
        </nav>
    )
}