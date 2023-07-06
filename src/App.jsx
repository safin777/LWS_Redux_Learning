import "./App.css";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <h1>React + Redux</h1>
      <h2>Conter App</h2>
      

      <Counter countBy={1} />
      
    </Provider>
  );
}

export default App;
