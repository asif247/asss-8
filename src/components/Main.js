import React,{useState} from 'react';
import CardWrapperComp from './CardWrapperComp';
import DisplayWrapperComp from './DisplayWrapperComp';

const Main = () => {
    const [displayData, setDisplayData] = useState([])

    const updateDisplay = (data) => {
        let tempArr = displayData;
        let isExists = tempArr.findIndex((item)=>item.id === data.id)
        if (isExists < 0) {           
            setDisplayData([...displayData ,data])
        }else{
            alert("already exists")
        }        
    }

  return (
    <div className="container">
      <div id="mainWrapper">
      <CardWrapperComp updateDisplay={updateDisplay}/>
      <DisplayWrapperComp displayData={displayData}/>
      </div>
    </div>
  );
};

export default Main;