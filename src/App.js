import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App bg-emerald-100">
      <Header />
      <main className="grow bg-emerald-100">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
