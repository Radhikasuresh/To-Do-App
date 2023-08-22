import React, { useState } from 'react';
import './App.css';
import { BsFillTrash3Fill } from "react-icons/bs";
import {TiTick} from 'react-icons/ti'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import {  useNavigate } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Todo() {
    const [todos,setTodos]=useState([])
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const navigate=useNavigate()
  
  const addToDo=()=>{
  const newtodo={
    title,
    description
  }
  if(title==="" && description===""){alert("Please Enter the Title and description")}
  else if(description===""){alert("Please Enter the Description")}
  else if(title===""){alert("Please Enter the title")}
  else{let updatedTodo=[...todos]
    updatedTodo.push(newtodo)
    
    setTodos(updatedTodo)
    setTitle("")
    setDescription("")
    console.log(updatedTodo);
   }
  }
  const deleteToDo = (index) => {
      const deletedTodo = todos.filter((item,i) => index !== i);
      setTodos(deletedTodo);
      
    };
    const completed = (index) => {
        const completedTodo = todos[index];
        alert("Move to Completed?")
        setTodos(completedTodo)
        console.log(completedTodo);
        navigate(`/completed?title=${encodeURIComponent(completedTodo.title)}&description=${encodeURIComponent(completedTodo.description)}`);
        
    };
    const completedList=()=>{
        navigate("/completed")
    }
    const deletedList=()=>{
        navigate("/deleted")
    }
  
  return (
   
    <div className='App'>
        <div className='header'>
    <h1 className='heading'>My Todo's</h1>
    <Button variant="warning" className='completed' onClick={completedList}>Completed</Button>&nbsp;
    </div><br/>
     <div>
     <Form>
       <Row>
         <Col>
           <Form.Control placeholder="Title"
           value={title} 
           onChange={(event)=>setTitle(event.target.value)}/>
         </Col>
         <Col>
           <Form.Control placeholder="Description"
            value={description}
            onChange={(event)=>setDescription(event.target.value)} />
         </Col>
       </Row>
     </Form>
     </div>
     <div><br></br>
      
     </div>
     <Button variant="primary" onClick={addToDo}> Add To-do</Button>
     <Table striped bordered hover style={{marginTop:"20px"}}>
       <thead>
      <tr>
          <th>Title</th>
           <th>Description</th>
         </tr>
       </thead>
       <tbody>
       {todos.map((item, index) => (
   <React.Fragment key={index}>
     <tr>
       <td>{item.title}</td>
       <td>{item.description}</td>
       <td>
         <Button
           variant="danger"
           onClick={() => deleteToDo(index)}
         >
           <BsFillTrash3Fill />
         </Button>&nbsp;
         <Button
           variant="success"
           onClick={()=>completed(index)} 
          >
           <TiTick />
         </Button>
       </td>
     </tr>
   </React.Fragment>
 ))}
 
       </tbody>
     </Table>
     </div>  
   )
}
