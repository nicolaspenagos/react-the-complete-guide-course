import { useState } from 'react';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Result from './components/Result/Result';

function App() {

  const [completeData, setCompleteData] = useState(null);

  const calculateHandler = (userInput) => {
    setCompleteData(userInput);
  }


  return (
    <div>
      <Header/>
      <Form calculateHandler={calculateHandler}/>
      {!completeData && <h3>No data is available!</h3>}
      {completeData  && <Result completeData={completeData}/>}
     
    </div>
  );
}

export default App;
