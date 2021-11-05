import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";


import { removeTodo, setTodoStatus } from "./redux/todoSlice";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";

import MyInput from "./components/input";
import TodoItem from "./components/todoItem";


function App() {

  const todoList = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Container maxWidth="xs">
      <Typography style={{ textAlign: "center" }} variant="h3">
        Redux List App
      </Typography>
      <MyInput />
      <List>
      {todoList.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
      </List>
    </Container>
  )
}

export default App
