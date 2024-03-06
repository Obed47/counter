import Counter from './counter';
import './App.css';
import Header from './header';

function App() {
  return (
    <div className="App">
     <div className="count">
      <Header/>
      <Counter/>
     </div>
    </div>
  );
}

export default App;
