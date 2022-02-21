import './App.css';
import { TopView } from './components/TopView';
import { SearchResult } from './components/SearchResult';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className='container'>
      <GlobalProvider>
        <TopView />
      </GlobalProvider>
    </div>
  );
}

export default App;
