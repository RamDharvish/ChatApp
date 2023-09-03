import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Routess from './Components/Shopping-Cart/Routes/Routes'
import { Provider } from 'react-redux'
import Store from './Components/Shopping-Cart/Redux/Store'

function App() {
  return (
    <Provider store={Store}>
    <div>
     <Routess/>
    </div>
    </Provider>
  )
}

export default App