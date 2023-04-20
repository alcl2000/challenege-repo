import css from './App.module.css';
// import NavBar from './components/NavBar'
import NavBarForm from './components/NavBarForm';
import SideBar from './components/Sidebar';
import ContentAPI from './components/ContentAPI';
import ContentAPIHooks from './components/ContentAPIHooks';


function App() {
  return (
    <div className={css.App}>
      {/* <NavBar /> */}
      <NavBarForm />
      <SideBar />
      <ContentAPIHooks />
    </div>
  );
}

export default App;