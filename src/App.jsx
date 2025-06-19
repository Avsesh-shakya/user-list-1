import React from 'react'
import Homepage from './Components/Homepage'
import {  Routes ,Route } from 'react-router-dom'
import Teacher from './Components/Teacher'




const App = () => {
  return (
    <div>
  

    
        <Homepage/>
        <Routes>
   
          <Route path='/' element={<Teacher/>}> </Route>
          <Route path='/teacher' element={<Teacher/>}> </Route>
        </Routes>
  



    </div>
  )
}

export default App
