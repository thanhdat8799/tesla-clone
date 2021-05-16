import './App.scss';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <div className="sections">
        <Section title='Model S' 
          description='Order online for touchless delivery'
          leftBtnText='Custom Order'
          rightBtnText='Available Inventories'
          bgImg='model-s.jpg' 
        />      
        <Section title='Model Y' 
          description='Order online for touchless delivery'
          leftBtnText='Custom Order'
          rightBtnText='Available Inventories'
          bgImg='model-y.jpg' 
        />      
        <Section title='Model X' 
          description='Order online for touchless delivery'
          leftBtnText='Custom Order'
          rightBtnText='Available Inventories'
          bgImg='model-x.jpg' 
        />      
        <Section title='Model 3' 
          description='Order online for touchless delivery'
          leftBtnText='Custom Order'
          rightBtnText='Available Inventories'
          bgImg='model-3.jpg' 
        />      
        <Section title='Solar for New Roofs' 
          description='Solar Roof Cost Less Than the new Roof'
          leftBtnText='Order now'
          rightBtnText='Learn more'
          bgImg='solar-roof.jpg' 
        />     
        <Section title='lowest cost solar panels in america' 
          description='money-back guarantee'
          leftBtnText='Order now'
          rightBtnText='Learn more'
          bgImg='solar-panel.jpg' 
        />   
        <Section title='Accessories' 
          
          leftBtnText='Shop now'
          
          bgImg='accessories.jpg' 
        />      
      </div>
      
    </div>
  );
}

export default App;
