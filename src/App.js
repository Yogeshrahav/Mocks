import React from 'react'
import Header from './pages/Header'
import Body from './pages/Body'
import user from './user.json'

function App () {
  return (
    <div> 
      <Header data={user.data1} />
      <Body data={user.data}/>
    </div>
  )
}

export default App
