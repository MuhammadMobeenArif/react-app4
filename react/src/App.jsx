import "./App.css";


import SortingPrice from "./components/Assignments/SortingPrice";
import SortPriceGreaterThen from "./components/Assignments/SortPriceGreaterThen";
import IncreasePriceByTen from "./components/Assignments/IncreasePriceByTen";
import StartWithAlphabet from "./components/Assignments/StartWithAlphabet";
import ThreeMostExpProduct from "./components/Assignments/ThreeMostExpProduct";
import BelowAndAboveAvg from "./components/Assignments/BelowAndAboveAvg";


  // ------------------------Assignment Data-----------------------------
  function App() {
  let products2 = [
    {
      name: "Mobile",
      price: 60000,
      status: true,
     
    },
    {
      name: "LED",
      price: 50000,
      status: true,
     
    },
    {
      name: "Bike",
      price: 40000,
      status: false,
    
    },
    {
      name: "Car",
      price: 70000,
      status: true,
     },
    {
      name: "Laptop",
      price: 30000,
      status: false,

    },
  ];

  return (
    <>
  
      <AvailibleStock products2={products2} />
      <SortingPrice products2={products2} />
      <SortPriceGreaterThen products2={products2}/>
      <IncreasePriceByTen products2={products2}/>
      <StartWithAlphabet products2={products2}/>
      <ThreeMostExpProduct products2={products2}/>
      <BelowAndAboveAvg products2={products2}/>
    </>
  );
}

export default App;
