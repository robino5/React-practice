 
 import avater from '../../../src/image/avatar.png'
 import "./style.css"
import { Container,Row,Col } from 'react-bootstrap'

 function Card(props){
const {name,designation}= props;
    return <Container>
    <Row>
      <Col md={4}>
      <div class="card">
         <div class="card-body">
         <img src={avater} alt="Logo"/>
         <p class="card-title">{name}</p>
         <p class="card-title">{designation}</p>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button class="btn btn-success">Add</button>
  </div>
</div>
      </Col>
    </Row>
    </Container>;
    
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

}

export default Card;