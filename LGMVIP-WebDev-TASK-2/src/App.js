import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import * as ReactBootstrap from "react-bootstrap";

const App = () => {

const [pageItem, setPageItem] = useState(null);
const [loading, setLoading] = useState(false);

const pageFunction = async () => {
  try {
    const data = await axios
    .get('https://reqres.in/api/users?page=1')
    .then(res => {
      console.log(res)
      setPageItem(res.data.page);
    });
  
  } catch (e) {
    console.log(e)
  }
};

useEffect(() => {
  pageFunction();
}, []);

// const loadUsers = async () =>
// {
//   //  console.log("before");https://reqres.in/api/users?page=1
//    const response = await fetch ("https://api.github.com/users");
//    const jsonResponse = await response.json();
//    setUsers(jsonResponse);
// };

return (
 <div class="AppText"> 
    <div className="App" >
       
        <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <ReactBootstrap.Container>
  
       <ReactBootstrap.Navbar.Brand href="#home">SAMSUNG </ReactBootstrap.Navbar.Brand>
       <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
       <ReactBootstrap.Nav className="me-auto">
       <ReactBootstrap.Nav.Link href="#features">Features</ReactBootstrap.Nav.Link>
       <ReactBootstrap.Nav.Link href="#pricing">Pricing</ReactBootstrap.Nav.Link>
        <ReactBootstrap.NavDropdown title="More Info" id="collasible-nav-dropdown">
        <ReactBootstrap.NavDropdown.Item href="#action/3.1">Details</ReactBootstrap.NavDropdown.Item>
        <ReactBootstrap.NavDropdown.Item href="#action/3.2">Performance</ReactBootstrap.NavDropdown.Item>
        <ReactBootstrap.NavDropdown.Item href="#action/3.3">About Phone</ReactBootstrap.NavDropdown.Item>
        <ReactBootstrap.NavDropdown.Divider />
        <ReactBootstrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootstrap.NavDropdown.Item>
      </ReactBootstrap.NavDropdown>
      </ReactBootstrap.Nav>
      {/* <ReactBootstrap.Nav>
      <ReactBootstrap.Nav.Link href="#deets">More deets</ReactBootstrap.Nav.Link>
      <ReactBootstrap.Nav.Link eventKey={2} href="#memes">
        Dank memes
      </ReactBootstrap.Nav.Link>
      </ReactBootstrap.Nav>  */}
       <button onClick = {pageFunction} class="btn btn-dark">GET USERS</button>

         </ReactBootstrap.Navbar.Collapse>
       </ReactBootstrap.Container>
      </ReactBootstrap.Navbar>
   </div>

       <h3 Class="text1"> Please click on Get Users to get all the details.. </h3>  

        <h2 Class="text2"> Users Info : </h2>

        <h3 Class="text3"> <ReactBootstrap.Spinner animation="border" variant="warning"/> </h3> 
        

        {/* <ul>
          {pageItem.map(({ id, login }) => ( 
          <li key={id}>Name: {login} </li>
          ))}
        </ul> <ReactBootstrap.Spinner animation = "border"/> */}

  </div>
  );
}

export default App;

