import Landing from './pages/Landing';
import Schedule from './pages/Schedule';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>  
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />    
          <Route path="/:id" element={<Schedule />}>
              
          </Route>
        </Routes>
      </Router>
    </>
  );
}


export default App;
