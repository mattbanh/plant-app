import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlantPage from './pages/PlantPage/PlantPage';



function App() {
  // Refactored all of App to only contain routes. Moved all logic and return to pages/PlantPage/PlantPage.js
  return (
    <BrowserRouter>
      <Routes>
        {/* All routes maintain the same "page" which have all the components that we want the paths to hold */}
        <Route path="/" element={<PlantPage />}></Route>
        <Route path="/plants" element={<PlantPage />}></Route>
        <Route path="/plants/:plantId" element={<PlantPage />}></Route>
      </Routes>
    </BrowserRouter>
 
  );
}

export default App;