import React, { createContext, useReducer } from 'react';

const initialState = {}
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    const data = action.data
    console.log("🚀 ~ file: store.js:10 ~ const[state,dispatch]=useReducer ~ data:", data)
    switch (action.type) {
      case 'GET_WEATHER':
        return state = { ...state, data }
      case 'GET_CITY':
        return state = { city: data }
      default:
        console.log("err");
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }