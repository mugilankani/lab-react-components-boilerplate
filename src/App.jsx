import './App.css';
import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter';
import GallaryHeader  from './components/GallaryHeader';
import imageData from "./components/images"
import GallaryMainContent from "./components/GallaryMainContent"



function App() {
  return (
    <div>
      <GallaryHeader/>
      <GallaryMainContent imageData = {imageData}/>
        
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
