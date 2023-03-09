import { useState, useEffect } from "react"
import { getPlantByIdEndpoint } from "../../utils/api-utils"
import axios from "axios";
import "./Display.scss"

export default function Display({activePlantId}) {
    // set state for rendered plant so it can hold data from the axios GET. Should hold the object of selected plant.
    const [renderedPlant, setRenderedPlant] = useState(null)

    // useEffect that depends on activePlantId. As activePlantId changes, the useEffect is called and then the axios
    // GET can be called. We setRenderedPlant, which can then provide the data to render in the return.
    useEffect(() => {
        axios.get(getPlantByIdEndpoint(activePlantId)).then((response) => {
            if(response.status === 200) {
                const axiosData = response.data;
                setRenderedPlant(axiosData);
            }
        })
    }, [activePlantId])

    // Important conditional that will prevent site from breaking when renderedPlant is null
    if (renderedPlant === null) {
        return <h1>Loading</h1>;
    }

    return (
        // Render all details from current active plants
        <section className="plant-details">
            <h1>{renderedPlant.name}</h1>
            <img alt="my special plant" className="plant-details__photo" src={renderedPlant.image_url} />
            <p>Watering schedule: {renderedPlant.water_frequency}</p>
            <p>{renderedPlant.type}</p>
        </section>
    )
}