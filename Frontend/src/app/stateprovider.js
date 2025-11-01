"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function StateProvider({ children }) {
  const [showPopup, setShowPopup] = useState(false);
  const [emailValue, setEmailValue] = useState("");

  return (
    <AppContext.Provider value={{ showPopup, setShowPopup, emailValue, setEmailValue }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppState() {
  return useContext(AppContext);
}
