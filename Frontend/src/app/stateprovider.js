"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();


export function StateProvider({ children }) {
  const [emailValue, setEmailValue] = useState("");
  const [nameValue, setNameValue] = useState(null);
  const [passwordValue, setPasswordValue] = useState(null);




  return (
    <AppContext.Provider value={{ emailValue, setEmailValue, nameValue, setNameValue, passwordValue, setPasswordValue }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppState() {
  return useContext(AppContext);
}
