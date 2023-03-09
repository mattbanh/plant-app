// Replaced json files with axios calls. Remember to just use the data that you need access to.
// import plantDetails from "../../../src/data/plantDetails.json";
// import plants from "../../../src/data/plants.json";

// imports 
import axios from "axios";
import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'

import "./PlantPage.scss";

import Nav from "../../../src/components/Nav/Nav"
import Display from "../../../src/components/Display/Display";
import Footer from '../../components/Footer/Footer';

import { getPlantsEndpoint } from "../../utils/api-utils";

const developers = ["Brendon", "Erik", "Gabe", "Nasrullah", "Naya"];

export default function PlantPage() {
    // plantInfo holds an array with the names and ids from the
    const [plantInfo, setPlantInfo] = useState(null);
    const { plantId } = useParams();

    // Produce the list of plants with names and ids. [] empty dependency array means it only runs once (only on first render).
    // However, the data created from this GET request will persist through state, while clicking through the site.
    // ie. You only need to load this data once and it will be maintained as you venture through the single-page application.
    useEffect(() => {
        axios.get(getPlantsEndpoint()).then((response) => {
            if(response.status === 200) {
                const axiosData = response.data;
                setPlantInfo(axiosData);
            }
        })
    }, [])

    // Important conditional that will prevent site from breaking when plantInfo is null.
    if (plantInfo === null) {
        return <h1>Loading</h1>;
    }
    
    // The renderedPlant will either be the plantId (from the url) but if no plantId from url (ex. on "/"), then use the first
    // object in the plantInfo array
    const renderedPlant = plantId || plantInfo[0].id;

    // filtered the plantInfo list to not include the selected plant (renderedPlant)
    const filteredPlants = plantInfo.filter((plant) => plant.id !== renderedPlant);

    return (
        <section className="plant-page">
            <Nav filteredPlantList={filteredPlants} />
            <section>
                <Display activePlantId={renderedPlant} />
                {/* Give credit to the best group of devs */}
                <Footer developers={developers} />  
            </section>
        </section>
    )
}