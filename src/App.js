
import './App.css';
import Product from './components/Product';


const product = {
  name: "Red Flyknit Trainers",
  price: "$190.00",
  size: ["small", "Medium", "Large", "Extra Large"],
  color: [
    {
      id: 0,
      alt: 'red',
      dark: "#8a3d28",
      light: "#ac5941",
      image: require("./images/red.jpg"),
    },
    {
      id: 1,
      alt: 'cyan',
      dark: "#1f737e",
      light: "#419fac",
      image: require("./images/cyan.jpg"),
    },
    {
      id: 2,
      alt: 'navy',
      dark: "#1f2e7e",
      light: "#416cac",
      image: require("./images/navy.png"),
    },
  ],
}

const App = () => {

  return (
    <div className="App">
        <Product product={product} className="App-container" />    
    </div>
  )
}

export default App;