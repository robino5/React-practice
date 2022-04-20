
import React from 'react';
import Card from './components/body/Card';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer'
import Count from './components/body/Count'
import  From from './components/body/Form'
import Shared from './components/body/Shared'



function App(){
return   <div>
     <Header />
     <Shared type="text"/>
     <Shared type="password"/>
   <Footer />
</div>
}

export default App;