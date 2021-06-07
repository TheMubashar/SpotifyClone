import React, { createContext, useContext, useReducer } from "react";

export const DataContext = createContext();

export const DataLayerProvider = ({ initialState, reducer, childern }) => (
  <DataContext.Provider value={useReducer(reducer, initialState)}>
    {childern}
  </DataContext.Provider>
);

export const useDataLayerValue = () => useContext(DataContext);
