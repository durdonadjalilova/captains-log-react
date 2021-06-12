import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios"
import {apiURL} from "./util/apiURL"
import NavBar from "./Components/NavBar"
import Index from "./Components/Index"
const API = apiURL()


function App() {

  const [logs, setLogs] = useState([])

  const fetchData = async() =>{
    try {
      const response = await axios.get(`${API}/logs`)
      console.log(response.data)  
      setLogs(response.data)  
    } catch (error) {
      
    }
  }
  useEffect (() =>{ 
    fetchData()
  },[])


  return (
    <div className="App">
      <Router>
        <NavBar />
         <main>
          <Switch>
            <Route exact path="/logs">
              <Index logs={logs} />
            </Route> 
             {/* <Route path="/logs/new">
              <New addLogs={addLogs} />
            </Route>
            <Route path="*">
              <FourOFour />
            </Route>  */}
          </Switch> 
           </main> 
      </Router>
    </div>
  )
}

export default App;
