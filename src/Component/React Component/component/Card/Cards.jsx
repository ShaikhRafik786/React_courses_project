import React , { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const Cards =()=> {
const [data, setData] = useState([]);
const [name, setName] = useState("");
const [image, setImage] = useState("");
const [city, setCity] = useState("");

const dispatch = useDispatch();
const handle = ()=> {
    dispatch({type: "ADD", data: {name, image, city}});
};

const result = useSelector ((state)=> state.CardReducer.cardData);
console.log("----->", result);

useEffect(()=>{
    setData(result);
}, [result]);

console.log("----->", data);
return(
    <div>
       <Row>
           {data.map((item)=>{
               return(
                   <div>
<img src={item.image} alt="" width='200px' />
<h3>{item.title.slice(0,20)}</h3>
<h3>{item.price}</h3>
                   </div>
               )
           })}       
           
     </Row>            
    </div>
)
}