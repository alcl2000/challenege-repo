import css from './App.module.css';
import NavBar from './components/NavBar'
import SideBar from './components/Sidebar';


function App() {
  return (
    <div className={css.App}>
      <NavBar />
      <SideBar />
    </div>
  );
}

export default App;