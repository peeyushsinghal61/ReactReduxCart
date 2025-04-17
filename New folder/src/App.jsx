import "./App.css";
import Navbar from "./Navbar";
import Body from "./Body";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Body />
      </Provider>
    </>
  );
}

export default App;
