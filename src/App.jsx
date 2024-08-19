import React from 'react'
import Sidebar from './Components/Sidebar'
import Player from './Components/Player'
import Display from './Components/Display'
// import Albumitem from './Components/Albumitem'

const App = () => {
  return (   
    <div className='h-screen bg-black'> 
    <div className='h-[90%] flex'>
      <Sidebar/>
      <Display/>
    </div>
    <Player/>
    {/* <Albumitem/> */}
    </div>
  )
}

export default App