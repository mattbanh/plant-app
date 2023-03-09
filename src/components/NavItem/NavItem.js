import "./NavItem.scss"
import { Link } from "react-router-dom"

export default function NavItem({id, plantName}) {    
    return (
        // Converted the onClick to a dynamic link with id of plant
        <li className="nav__list-item">
            <Link className="nav__list-link" to={`/plants/${id}`}>{plantName}</Link> 
        </li>
    )
}