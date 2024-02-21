import { Provider } from "react-redux";
import AppRoute from "./Router/AppRoute";
import { legacy_createStore } from "redux";
import Reducer from "./Redux/Reducer";

const App = () => {
  return (
    <Provider store={legacy_createStore(Reducer)}>
      <AppRoute />
    </Provider>
  );
};

export default App;
