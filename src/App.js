import React from 'react';
//importing our Sass styling
import './styles/App.scss';
//importing our components
import Headline from './components/Headline';
//importing our state from Context Api
import { StateProvider } from './components/StateContext';


function App() {
  return (
    <StateProvider>
      <div className="App">
        <Headline 
          title='Compare your Air'
          textLineOne='Compare the air quality between cities in the UK.'
          textLineTwo='Select cities to compare using the search tool below.'
        />
      </div>
    </StateProvider>

  );
}

export default App;
