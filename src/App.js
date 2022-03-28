
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
    <Card />
</div>
}

export default App;