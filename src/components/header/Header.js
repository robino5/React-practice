import slider_1 from '../../../src/image/carasul-1.jpg'
import slider_2 from '../../../src/image/carasul-2.jpg'
import slider_3 from '../../../src/image/carasul-3.jpg'
import "./style.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from 'react-bootstrap'

function Header(){
return <Carousel>
<Carousel.Item>
<img class="slider_wraping" src={slider_1} alt="Logo"/>
  <Carousel.Caption>
    <h3>First slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img class="slider_wraping" src={slider_2} alt="Logo"/>

  <Carousel.Caption>
    <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img class="slider_wraping" src={slider_3} alt="Logo"/>
  <Carousel.Caption>
    <h3>Third slide label</h3>
    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>
}

export default Header;