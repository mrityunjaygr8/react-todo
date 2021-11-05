import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";

import { addTodo } from "../redux/todoSlice";

function MyInput() {
  const dispatch = useDispatch<AppDispatch>();
  const [todoDescription, setTodoDescription] = useState("");
  
  return <>
      <TextField
        variant="outlined"
        label="To Do Item"
        fullWidth
        onChange={(e) => setTodoDescription(e.target.value)}
        value={todoDescription}
      />
      <Button variant="contained" color="primary" fullWidth 
        onClick={()=>{
          dispatch(addTodo(todoDescription));
          setTodoDescription("");
        }}>
        Add Todo
      </Button>
  </>
}

export default MyInput;
