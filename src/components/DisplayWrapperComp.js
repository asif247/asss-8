import React,{useState,useEffect} from 'react';

const DisplayWrapperComp = (props) => {
const {displayData} = props

const [data, setData] = useState(null)

const totalInvest = ()=>{
    let total = 0;
    for (let i = 0; i < data?.length; i++) {
        total += data[0].invest        
    }
    return total;
}

useEffect(() => {
    setData(displayData)
}, [data,displayData]);

    return (
        <div id="displayWrapper">
            <h2>Member added: {data?.length}</h2>
            <h2>Total Invest: ${totalInvest()}</h2>
            <br />
            {data?.map((item, index) =>(
                <h3 key={index}>{item.name}</h3>
            ))}
        </div>
    );
};

export default DisplayWrapperComp;