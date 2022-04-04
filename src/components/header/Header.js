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
    <p>Treat yourself! Your dream resort stay is just a few clicks away</p>
    <div class="search-box">
    <input class="heding-manu-place heading-search-border" type="text" name="name" />
    <input class="heding-manu-date heading-search-border" type="text" name="name" />
    <input class="heding-manu-user heading-search-border" type="text" name="name" />
    <button class="heading-search-btn heading-search-border">Search</button>
    </div>
    </div>
  </div>  
</Container>
}

export default Header;