import './App.css'
import { loginRoutes } from 'routes/loginRoutes'
import { useRoutes } from 'react-router-dom'
import React from 'react'

function App() {
  let element = useRoutes(loginRoutes)

  return (
    <>
      {element}
    </>
  )
}

export default App
