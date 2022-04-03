 
 import avater from '../../../src/image/avatar.png'
 import "./style.css"
 import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Container,Row,Col,Button  } from 'react-bootstrap'
import Date from"../../data.json"

 function Card(){
    return<Container>
    <Row>
    {Date.map((item)=> 
      <Col md={4}>
      <div class="cards">
         <div class="cards-body">
         <img src={item.image} alt="Logo"/>
         <p class="cards-title">{item.name}</p>
         <p class="cards-title">{item.designation}</p>
        <p class="cards-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Button variant="primary">Secondary</Button>
  </div>
</div>
      </Col>
    )}
    
    </Row>
    </Container>
    
  }
    
 
    
//     <div class="wrapper">
//         <div class="card">
//          <div class="card-body">
//          <img src={avater} alt="Logo"/>
//          <p class="card-title">{name}</p>
//          <p class="card-title">{designation}</p>
//         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <button class="btn btn-success">Add</button>
//   </div>
// </div>
//         </div>



export default Card;