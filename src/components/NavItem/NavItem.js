import "./Nav.scss"

export default function NavItem({id, plantName, renderPlant}) {
    
    return (
        // Each individual nav item contains an onClick
        // Use anonymous function to prevent invocation of function that requires a parameter
        <li className="nav__list-item" onClick={() => {renderPlant(id)}}>
            {plantName}
        </li>
    )
}