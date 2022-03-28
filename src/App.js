
import React from 'react';
import Card from './components/body/Card';
import Date from"./data.json"

function App(){
        //   let details=[];
        //   for (let i=0; i<Date.length;i++){
        //     details.push(<Card  name={Date[i].name} designation={Date[i].designation}/>) ;
        //   }
        // details = Date.map((item)=> <Card name={item.name} designation={item.designation}  />)
return <div>
    {Date.map((item,index)=> <Card key={index} name={item.name} designation={item.designation}  />)}
    {Date.map((item)=> 
    <div>
             <ul>
                 <li>{item.name}</li>
             </ul>
        </div>
    )}
</div>
}

export default App;