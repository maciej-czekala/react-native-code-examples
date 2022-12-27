import React from 'react';
import type {Node} from 'react';

import { Provider } from "react-redux";
import store from "./app/features/reduxStore"

// import Screen from "./app/screens/VirtualizedListGridScreen"
// import Screen from "./app/screens/PlaygroundScreen"
// import Screen from "./app/screens/ReduxScreen"
// import Screen from "./app/screens/ButtonsScreen"
// import Screen from "./app/screens/InputsScreen"
// import Screen from "./app/screens/ArraysScreen"
// import Screen from "./app/screens/VariablesManipulationScreen"
import Screen from "./app/screens/NetworkScreen"


const App: () => Node = () => {
  return (
    <Provider store={store}>
      <Screen/>
    </Provider>
  );
};


export default App;
