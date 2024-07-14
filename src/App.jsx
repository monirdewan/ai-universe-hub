import { useState } from "react";
import Button from "./assets/component/Button/Button";
import Card from "./assets/component/Card/Card";
import Header from "./assets/component/Header/Header";


const App = () => {
  const [showAll, setShowAll] = useState(false);
  const handleShowAll = ()=>{
    setShowAll(true)
  }
  return (
    <>
    <Header />
    <Button>Short By Date</Button>
    <Card showAll={showAll} />
   <span onClick={()=> handleShowAll()}>
    {
      !showAll &&  <Button>See More</Button>
    }
  
   </span>
   
    </>
  );
};

export default App;