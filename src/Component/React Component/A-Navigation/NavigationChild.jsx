import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const NavigationChild = () => {
    const [name, setName] = useState();
    const [link, setLink] = useState();
    const [target, setTarget] = useState();
    const dispatch = useDispatch();
     const handleAddLink = ()=>{
       if(!name && !link && !target) {
     alert("please fill required field");
     } else if (!link) {
     alert("please fill link");
     } else if (!target) {
         alert ("please fill target");
     }else if (!name) {
         alert ("please fill name");
     }
         dispatch({type: "ADD_NAV_LINK", navData:{name, link, target}});
     };
    return (
        <div style={{margin: "15px"}}>
            <input type="text"
            placeholder='Add new link URL'
            onChange={(event)=>setName(event.target.value)}/>

            <input type="text"
            placeholder='Add new link URL'
            onChange={(event)=>setLink(event.target.value)}/>

            <input type="text"
            placeholder='Add new link URL'
            onChange={(event)=>setTarget(event.target.value)}/>
            <button onClick={handleAddLink}>AddLink</button>
            
        </div>
    );
};

export default NavigationChild;