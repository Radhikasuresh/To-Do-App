import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Completed() {
  const [completedTodos, setCompletedTodos] = useState([]);
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    setCompletedTodos(todos?.filter((todos) => todos.completed));
  }, []);

  const navigate = useNavigate();

  const homeButton = () => {
    navigate("/");
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Completed To-Do</h1>
        <Button variant="success" onClick={homeButton}>
          Go to Home Page
        </Button>
      </div>
      <br />
      <Table striped bordered hover style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {completedTodos?.map((item) => (
            <tr>
              <td>{item?.title}</td>
              <td>{item?.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Completed;
