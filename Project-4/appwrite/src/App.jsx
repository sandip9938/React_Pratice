import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import {useDispatch} from 'react'
import { useState, useEffect} from 'react'
import './App.css'
import AuthService  from './appwrite/auth'
import {login,logout} from './store/authslice'

function App() {
const [loading,setLoading]=useState(true)
const dispatch = useDispatch()
useEffect(()=>{
  AuthService.getCurrentUser()
    .then((userdata)=>{
      if(userdata){
        dispatch(login(userdata))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  
}, [])
return !loading ? (
  <div className="min-h-screen flex-wrap content-between bg-gray-500">
    <div className='w-full block'>
      <Header/>

      <main />
      <Footer />
    </div>
  </div>
) : null
}

  

export default App
