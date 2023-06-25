import "./App.css";
import data from "./assets/json/data.json";
import logo from "./assets/img/logo.png";
import Content from "./components/Content";

function App() {
  return (
    <>
      <header>
        <div>
          <img src={logo} alt="logo netflix en rouge" />
        </div>
      </header>
      <Content data={data} />
    </>
  );
}

export default App;
