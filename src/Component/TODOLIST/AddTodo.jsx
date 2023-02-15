import React from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
const AddTodo = ({ setAddTodoData, handleAddTodo }) => {
  return (
    <div>
      <br />
      <TextField
        onChange={(e) => setAddTodoData(e.target.value)}
        label="Add Todo"
        variant="standard"
        autoComplete="off"
        style={{ width:"300px"}}
        autoFocus={true}
      />
      <Button variant="contained" onClick={handleAddTodo}>
        Add
      </Button>
    </div>
  );
};
export default AddTodo;


