import "./Nav.scss"
import NavItem from "../NavItem/NavItem"

export default function Nav({filteredPlantList, renderPlant}) {

    return (
        <ul className="nav">
        {/* map the array filtered plant list */}
        {filteredPlantList.map((plant) => {
            return <NavItem key={plant.id} id={plant.id} plantName={plant.name} renderPlant={renderPlant}/>
        })}
    </ul>
        
    )
}