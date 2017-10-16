import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import CalculatorFrame from './components/frame'

class App extends Component{
  render(){
    return(
        <div className="App">
          <CalculatorFrame />
        </div>
    );
  }
}

export default App;