import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Socials from "./Socials";

import "bootstrap/dist/css/bootstrap.css";

import { Container, Col, Row } from 'react-bootstrap';

function App() {
  return (
<Container >
<Col className="sidebar"> 
<Socials />
</Col>

<Col> 

<Header  />
<Footer />
</Col>

<Col> 

</Col>






    

</Container>



  );
}

export default App;
