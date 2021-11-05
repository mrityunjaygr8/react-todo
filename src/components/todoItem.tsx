import { Todo } from "../models/Todo"
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import { AppDispatch } from "../redux/store";
import { removeTodo, setTodoStatus } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

function TodoItem({ todo }: {todo: Todo}) {
  const dispatch = useDispatch<AppDispatch>();
  
  return <>
        <ListItem key={todo.id}>
          <ListItemText style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.description}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton onClick={() => {dispatch(removeTodo(todo.id))}}>
              <DeleteIcon />
            </IconButton>
            <Checkbox edge="end" value={todo.completed}
              onChange={() => {dispatch(setTodoStatus({id: todo.id, completed: !todo.completed}))}} />
              

            
          </ListItemSecondaryAction>
        </ListItem>
	</>
}

export default TodoItem
