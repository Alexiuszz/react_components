import "./styles.css";
import NavWrapper from "./Components/NavWrapper";
import Hamburger from "./Components/Hamburger";
// import Input from './Components/Input';
// import LabelledInput  from './Components/LabelledInput';

function App() {
  return (
    <div className="App">
      <NavWrapper>
        <div className="a-H">
          <Hamburger />
        </div>
      </NavWrapper>
    </div>
  );
}

export default App;
