import css from './App.module.css';
import NavBar from './components/NavBar'
import NavBarForm from './components/NavBarForm';
import SideBar from './components/Sidebar';


function App() {
  return (
    <div className={css.App}>
      {/* <NavBar /> */}
      <NavBarForm />
      <SideBar />
    </div>
  );
}

export default App;