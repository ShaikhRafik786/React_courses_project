import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { Button, Modal } from "react-bootstrap";
import NavigationChild from './NavigationChild';

export const Navigation = () => {
    const [navData, setNavData]= useState([]);
    const [show, setShow]= useState()

    const finalResult = useSelector((state)=> state.navReducer.navData);
    
    useEffect(()=>{
        setNavData(finalResult);
    }, [finalResult]);
    return (
        <div>
           {navData.map((element)=>{
               return(
                   <a
                    href={element.link}
                   target={element.target}
                   className="myAnchor">
                       {element.name}
                   </a>
               );
           })}
           <nav/>
           <NavigationChild/>
           <Button onClick={()=> setShow(true)}>Dashboard</Button>
           <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h2>Add Navigation</h2>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={false}>
            Close
          </Button>
          <Button variant="primary" onClick={true}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
};

export default Navigation;