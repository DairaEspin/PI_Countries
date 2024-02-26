import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Landing from './views/Landing/Landing';
// import Home from './views/Home/Home';
// import Form from './views/Form/Form'
// import Detail from './views/Detail/Detail'
// import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/">
      {/* <NavBar /> */}
      </Route>

      <Route exact path="/">
        <Landing />
      </Route>
{/* 
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/detail">
          <Detail />
        </Route>

        <Route path="/create">
          <Form />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;