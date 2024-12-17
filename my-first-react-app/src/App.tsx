import "./App.css";
import Header from "./components/Header";
import Info from "./components/Info";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <Welcome message="Hello!" />
      <Header logoText="My First React App" />
      <Info firstname="Haruka" lastname="Kakiuchi" age={26} isStudent={true} />
    </>
  );
}

export default App;
