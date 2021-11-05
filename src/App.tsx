import { useSelector } from "react-redux";
import { RootState } from "./redux/store";



import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";

import MyInput from "./components/input";
import TodoItem from "./components/todoItem";


function App() {

  const todoList = useSelector((state: RootState) => state);

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
