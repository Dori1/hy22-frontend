import './App.css';
import { Sidebar } from './sidebar/Sidebar';

function App() {
  return (
    <div className="container">
      <div className='side-container'>
        <Sidebar></Sidebar>
      </div>
      <div className='main-container'>
        test
      </div>
    </div>
  );
}

export default App;
