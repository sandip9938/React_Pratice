import React from 'react'
import Header from '../Common/Header/Header'
import Tab from '../Common/tabOption/Tab'
import Footer from '../Common/Footer/Footer.jsx'
import { useState } from "React";
import Delhivery from '../Delhibery/Delhivery'
import Dining from '../Dining/Dining'
import Nightlife from '../Nightlife/Nightlife'








function Home(){
  const [actibeTab, setActibetab]= useState("Delhivery")
  return (
    <div>
    <Header />
    <Tab actibeTab={actibeTab} setActibetab={setActibetab}/>
      {getCorrectScreen(actibeTab)}
      <Footer />
    </div>
  )
}
const getCorrectScreen=(tab)=>{
  switch(tab){
    case "Delhivery":
      return <Delhivery/>
      case "DiningOut":
        return <Dining />
        case "Nightlife":
          return <Nightlife />
          default:
            return <Delhivery/>
  }
}
export default Home
