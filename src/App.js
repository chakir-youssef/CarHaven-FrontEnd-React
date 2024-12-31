import "./App.css";
import { CarProvider } from "./context/carContext";
import Container from "./sections/Container/Container";
import Header from "./sections/Header/Header";

function App() {
  return (
    <div className="App">
      <CarProvider>
        <Header />
        <Container />
      </CarProvider>
    </div>
  );
}

export default App;
