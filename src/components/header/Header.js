import slider_1 from '../../../src/image/carasul-1.jpg'
import slider_2 from '../../../src/image/carasul-2.jpg'
import slider_3 from '../../../src/image/carasul-3.jpg'
import "./style.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Container,Row,Col,Button  } from 'react-bootstrap'

function Header(){
return <Container>
  <div class="Header_search">
    <div class="Header_background">
    <h3>Resort</h3>
    <p>Treat Yourself! Your dream resort</p>
    <div class="search-box">
    <input type="text" name="name" />
    <input type="text" name="name" />
    <input type="text" name="name" />
    <button>Search</button>
    </div>
    </div>

  </div>


  
</Container>
}

export default Header;