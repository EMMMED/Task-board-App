import Emmmed from './images/emmmed.png'
import './App.css';
import Task from './Components/Task';
import TaskList from './Components/TaskList';

function App() {

  return (
    <div className="App">
      <div className='logo-container'>
        <img 
        className='logo-emmmed'
        src={Emmmed}  
        alt="logo-aplication" />
        <h1 className='title'>TASK BOARD</h1>
      </div>
      <div className='task-list'>
        <h1>MY TASKS</h1>
        <TaskList />
        
      </div>
    </div>
  );
}

export default App;
