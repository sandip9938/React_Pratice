

import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Context/Theme'
import Appui from './components/AppUi/Appui'

function App() {
const [themeMode,setthemeMode]=useState("light")
const lighttheme =()=>{
  setthemeMode("light")
}
const darktheme =()=>{
  setthemeMode("dark")
}

useEffect(()=>{
  document.querySelector("html").classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
})



  return (
   <ThemeProvider value={themeMode,lighttheme,darktheme}>
    <Appui/>
   </ThemeProvider>
 
    
  )
}

export default App
