import "./style.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Container,Row,Col } from 'react-bootstrap'
import Select from 'react-select'


function Footer(){
    const options1 = [
        { value: 'en', label: 'English' },
        { value: 'bn', label: 'Bangla' },
        { value: 'ar', label: 'Arabic' }
      ]
      const options2 = [
        { value: 'i', label: 'Inr' },
        { value: 'b', label: 'Bnr' },
        { value: 'r', label: 'SR' }
      ]
    return  <div class="footer_wrapper">
    <Container>

        <Row>
        <Col md={3}>
            <div class="footer_selece_item1">
            <Select  options={options1} />
            </div>
            <div class="footer_selece_item2">
            <Select  options={options2} />
            </div>
        </Col>
        <Col md={3}>
          <p>Airbnb</p>
          <a>About Us</a> <br/>
          <a>Carrer</a><br/>
          <a>Press</a><br/>
          <a>Policies</a><br/>
          <a>Help</a><br/>
          <a>Diversity & Beloging</a><br/>

        </Col>
        <Col md={3}>
          <p>Discover</p>
          <a>Trust & safety</a> <br/>
          <a>Traver Credit</a><br/>
          <a>Gidt Cards </a><br/>
          <a>Airbnb Citizen</a><br/>
          <a>Bussiness Travel</a><br/>
          <a>Guidebooks</a><br/>
          <a>Airbnbmag</a><br/>

        </Col>
        <Col md={3}>
          <p>Hosting</p>
          <a>Why Host</a> <br/>
          <a>Hospitality</a><br/>
          <a>Responsible Hosting</a><br/>
          <a>Community Center</a><br/>

        </Col>
        </Row>
          <div class="sub_footer_wrapper">
          <Row>
          <Col md={6}>
             <div class="text-start">
                <p>Airbnb, Inc.</p>
             </div>
           </Col>
           <Col md={6}>
           <div class="text-end">
                <p>Terms Privacy Site Map</p>
             </div>
           </Col>
          </Row>
          </div>
        </Container>
        </div>
   
 
}

export default Footer;
