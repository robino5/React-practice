 
 import avater from '../../../src/image/avatar.png'
 import "./style.css"

 function Card(props){
const {name,designation}= props;
    return <div class="wrapper">
        <div class="card">
         <div class="card-body">
         <img src={avater} alt="Logo"/>
         <p class="card-title">{name}</p>
         <p class="card-title">{designation}</p>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button class="btn btn-success">Add</button>
  </div>
</div>
        </div>

}

export default Card;