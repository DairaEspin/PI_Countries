import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; // Importa el Provider
import store from './redux/Store'; // Importa tu store de Redux

import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Form from './views/Form/Form';
import Detail from './views/Detail/Detail';
import NavBar from './components/Nav/NavBar';

function App() {
  return (
    <Provider store={store}> {/* Envuelve tu aplicación con Provider */}
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/create" element={<Form />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;

