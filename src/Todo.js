import React, { useEffect, useState } from "react";
import "./App.css";
import { BsFillTrash3Fill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const addToDo = () => {
    const newtodo = {
      title,
      description,
    };
    if (title === "" && description === "") {
      alert("Please Enter the Title and description");
    } else if (description === "") {
      alert("Please Enter the Description");
    } else if (title === "") {
      alert("Please Enter the Title");
    } else {
      let addedTodo = [...todos];
      addedTodo.push(newtodo);

      setTodos(addedTodo);
      setTitle("");
      setDescription("");
      console.log(addedTodo);
    }
  };
  const deleteToDo = (index) => {
    const deletedTodo = todos.filter((item, i) => index !== i);
    setTodos(deletedTodo);
  };
  const completed = (index) => {
    setTodos((prev) => {
      const updatedTodos = [...prev];
      updatedTodos[index].completed = true;
      return updatedTodos;
    });
  };
  const completedList = () => {
    navigate("/completed");
  };
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")) || []);
  }, []);

  useEffect(() => {
    if (todos.length > 0) localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <div className="header">
        <h1 className="heading">My Todo's</h1>
        <Button variant="warning" className="completed" onClick={completedList}>
          Completed
        </Button>
        &nbsp;
      </div>
      <br />
      <div>
        <Form>
          <Row>
            <Col>
              <Form.Control
                placeholder="Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </Col>
          </Row>
        </Form>
      </div>
      <div>
        <br></br>
      </div>
      <Button variant="primary" onClick={addToDo}>
        {" "}
        Add To-do
      </Button>
      <Table striped bordered hover style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Completed/Deleted</th>
          </tr>
        </thead>
        <tbody>
          {todos?.map((item, index) => (
            <React.Fragment key={index}>
              <tr>
                <td
                  style={
                    item.completed ? { textDecoration: "line-through" } : {}
                  }
                >
                  {item.title}
                </td>
                <td
                  style={
                    item.completed ? { textDecoration: "line-through" } : {}
                  }
                >
                  {item.description}
                </td>
                <td>
                  <Button variant="danger" onClick={() => deleteToDo(index)}>
                    <BsFillTrash3Fill />
                  </Button>
                  &nbsp;
                  {!item.completed ? (
                    <Button variant="success" onClick={() => completed(index)}>
                      <TiTick />
                    </Button>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
