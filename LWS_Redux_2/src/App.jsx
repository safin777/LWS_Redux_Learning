import "./App.css";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <h1>React + Redux</h1>
      <h2>Conter App</h2>
      <div>
        <h3>Count: 0</h3>
      </div>

      <Counter countBy={2} />
      <Counter countBy={5} />
      <Counter countBy={7} />
    </Provider>
  );
}

export default App;
