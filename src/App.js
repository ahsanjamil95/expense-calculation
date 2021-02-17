import './App.css';
import Expense from './expense';
import {TransProvider} from './contextStore';

function App() {
  return (
    <TransProvider>
     <Expense/>
    </TransProvider>
     
    
    
    
  );
}

export default App;
