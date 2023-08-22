import { Button, Table } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

function Completed() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get('title');
  const description = queryParams.get('description');

  const navigate=useNavigate()

  const homeButton=()=>{
    navigate("/")
  }

  return (
    <div>
        <div style={{textAlign:"center"}}>
      <h1 >Completed To-Do</h1>
      <Button variant="success" onClick={homeButton}>Go to Home Page</Button>
      </div><br/>
      <Table striped bordered hover style={{textAlign:"center"}}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{title}</td>
            <td>{description}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Completed;
