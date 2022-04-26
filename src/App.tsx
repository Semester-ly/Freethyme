import Landing from './pages/Landing';
import Meeting from './pages/Meeting';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  


  return (
    <>  
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />    
          <Route path="/:id" element={<Meeting />}>
              
          </Route>
        </Routes>
      </Router>
    </>
  );
}


export default App;
