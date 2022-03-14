import React from 'react';
import Calendar from './components/Calendar';
import Participants from './components/Participants';
import Header from './components/Header';

function App() {

  return (
    <div className="container">
      <Header name="Kiron Deb"/>

      <div className="row">
        <div className="col-10">
          <Calendar/>
        </div>

        <div className="col-2">
          <Participants/>
        </div>
      </div>
    </div>
  );
}

export default App;
