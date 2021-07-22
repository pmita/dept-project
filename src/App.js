import React from 'react';
//importing our Sass styling
import './styles/App.scss';
//importing our components
import Headline from './components/Headline';


function App() {
  return (
    <div className="App">
      <Headline 
        title='Compare your Air'
        textLineOne='Compare the air quality between cities in the UK.'
        textLineTwo='Select cities to compare using the search tool below.'
      />
    </div>
  );
}

export default App;
