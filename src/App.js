import './App.scss';
import plantDetails from "../src/data/plantDetails.json";
import plants from "../src/data/plants.json";
import Nav from "../src/components/Nav/Nav"
import Display from "../src/components/Display/Display";
import {useState} from "react";
import Footer from './components/Footer/Footer';
const developers = ["Brendon", "Erik", "Gabe", "Nasrullah", "Naya"]


function App() {
  // Using state to track which plant is active. Active plant will be shown in Display and removed from Nav
  const [activePlant, setActivePlant] = useState(plantDetails[0]);
  
  // To choose right ID (to be rendered)
  const renderPlant = (plantId)  => {
    
    // ORIGINAL RENDERED PLANT CREATED AN ARRAY:
    // const renderedPlant = plantDetails.filter((plant) => plant.id === plantId);
    // setActivePlant(renderedPlant[0])

    // Using find instead of filter allows us to get just the object and not another array
    const renderedPlant = plantDetails.find((plant) => plant.id === plantId);

    setActivePlant(renderedPlant);    
  }

  // Filter out the currently selected plant to not include it in the nav
  const filteredPlants = plants.filter((plant) => plant.id !== activePlant.id);

  return (
    <div className="plant-page">
      {/* Pass filtered list which doesn't include active plant. Pass renderPlant which changes the active plant */}
      <Nav filteredPlantList={filteredPlants} renderPlant={renderPlant}/>
      <div>
        {/* Pass activePlant object with all plant details to be rendered in Display */}
        <Display activePlant={activePlant} />
        {/* Give credit to the best group of devs */}
        <Footer developers={developers} />  
      </div>
    </div>
  );
}

export default App;
