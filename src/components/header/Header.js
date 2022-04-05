import slider_1 from '../../../src/image/carasul-1.jpg'
import slider_2 from '../../../src/image/carasul-2.jpg'
import slider_3 from '../../../src/image/carasul-3.jpg'
import "./style.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Container,Row,Col,Button,ButtonGroup  } from 'react-bootstrap'

function Header(){
return <div>
  <div>
    <Row>
      <Col md={6}>
         <div class="text-start">
         <div class="btn-group">
         <button>Apple</button>
         <button>Samsung</button>
         <button>Sony</button>
          </div>
         </div>
      </Col>
      <Col md={6}>
         <div class="text-end top-menu-right">
         <a>Become a Host</a>
             <a>Help</a> 
              <a>Sign Up</a>
               <a>Log In</a>
         </div>
      </Col>
    </Row>
    <Row>
    <Col md={12}>
      <div class="menu-navigation">
      <ul>
  <li><a href="default.asp">Home</a></li>
  <li><a href="news.asp">News</a></li>
  <li><a href="contact.asp">Contact</a></li>
  <li><a href="about.asp">About</a></li>
</ul>
      </div>
      </Col>
    </Row>
  </div>
<Container>
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
</div>
}

export default Header;