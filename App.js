import React from 'react';
import { Nav } from './components/Nav_home';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import reducer from './reducer/index'; 

const store = createStore(reducer);

const App = () => {
  return (
      <Provider store={store} >
        <Nav />
      </Provider>
  )
};

export default App;
