import './App.css';
import DataProvider from './assets/Data';
import Homepage from './pages/Homepage';

function App() {
  return (
    <>
    <DataProvider>
      <Homepage />
    </DataProvider>
    </>
  );
}

export default App;
