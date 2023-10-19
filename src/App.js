import "./styles.css";
import NavWrapper from "./Components/NavWrapper";
import Hamburger from "./Components/Hamburger";
import Book from "./BookEffect";
// import Input from './Components/Input';
// import LabelledInput  from './Components/LabelledInput';

function App() {
  return (
    <div className="App">
      <NavWrapper>
        <div className="a-H center-content">
          <Hamburger />
        </div>
      </NavWrapper>
      <Book />
    </div>
  );
}

export default App;
