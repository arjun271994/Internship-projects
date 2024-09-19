import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext.jsx";
import { ChakraProvider } from "@chakra-ui/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <AuthProvider>
        <Router>
          <App />
        </Router>
      </AuthProvider>
    </ChakraProvider>
  </StrictMode>
);
