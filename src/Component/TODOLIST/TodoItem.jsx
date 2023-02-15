import React from "react";
import { Modal, Button } from "react-bootstrap";
import DeletForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
const TodoItem = ({
  item,
  handleDeleteTodo,
  show,
  setShow,
  setEditTodo,
  handleEditTodo,
}) => {
  return (
    <div>
      <li
        style={{
          backgroundColor: "lightblue",
          width: "25%",
          display: "inline-block",
        }}
      >
        {item.todo}
      </li>
      <EditIcon onClick={() => setShow(true)} />
      <DeletForeverIcon onClick={() => handleDeleteTodo(item.id)} />
      {/* <button onClick={() => setShow(true)}>Edit</button>
      <button onClick={() => handleDeleteTodo(item.id)}>delet</button> */}
      {/* ///////////////////////////Modal///////////////////////////////// */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TextField
            onChange={(e) => setEditTodo(e.target.value)}
            label="Edit Todo"
            variant="standard"
            autoComplete="off"
            style={{ width: "300px" }}
            autoFocus={true}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleEditTodo(item.id)}>
            Submit
          </Button>
        </Modal.Footer>
        <Button />
      </Modal>
    </div>
  );
};

export default TodoItem;
