import React, {useState, useEffect} from 'react';
import SingleCard from './SingleCard';
import {data} from './../data/data';

const CardWrapperComp = (props) => {
    const {updateDisplay} = props;
  const [myData,
    setMyData] = useState(null)
  useEffect(() => {
    setMyData(data)
  }, [myData]);
  return (
    <div id="cardWrapper">

      {myData && myData.map((item, idx) => (<SingleCard updateDisplay={updateDisplay} key={idx} cardData={item}/>))
      }

    </div>
  );
};

export default CardWrapperComp;