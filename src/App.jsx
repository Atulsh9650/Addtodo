import React, { useState } from "react";
import Fooditem from "./components/Fooditem";
import Addnewitem from "./components/Addnewitem";
import Boughtitems from "./components/Boughtitems";

function App() {
  const fooditemslist =["apple","banana","tea"];
  const [fooditems, setFooditems] = useState(fooditemslist);
  const [boughtItems, setBoughtItems] = useState([]);

  const handleBuyClick = (item) => {
    setBoughtItems([...boughtItems, item]); // Add the bought item to the list of bought items
  };

  const onAddNewItem = (event) => {
    if (event.key === 'Enter') {
      const newItem = event.target.value;
      event.target.value = "";
      setFooditems([...fooditems, newItem]);
    }
  };

  const deleteitem = (item) => {
    const newitems=boughtItems.filter((ele)=>{
        return ele !==item;
    });
    setBoughtItems(newitems);
  }

  return (
    <div className="main-main-div">

    <div className="maindiv">
      <h1 className="food-heading">Healthy food</h1>

      <Addnewitem addnewitem={onAddNewItem} />
      <ul className="list-group">
        <Fooditem items={fooditems} handleBuyClick={handleBuyClick} boughtItems={boughtItems} />
      </ul>
    </div> 

      <div className="item-cart">
      <Boughtitems boughtItems={boughtItems} deleteitem={deleteitem} />
      </div>
    
    </div>
  );
}

export default App;
