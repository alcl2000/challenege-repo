import css from './App.module.css';
// import NavBar from './components/NavBar'
import NavBarForm from './components/NavBarForm';
import SideBar from './components/Sidebar';
import ContentAPI from './components/ContentAPI';


function App() {
  return (
    <div className={css.App}>
      {/* <NavBar /> */}
      <NavBarForm />
      <SideBar />
      <ContentAPI />
    </div>
  );
}

export default App;