import "./index.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { App } from "App";
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NoteBrowse } from "pages/NoteBrowse/NoteBrowse";
import { Note } from "pages/Note/Note";
import { NoteCreate } from "pages/NoteCreate/NoteCreate";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NoteBrowse />}></Route>
          <Route path="/note/:id" element={<Note />}></Route>
          <Route path="/note/new" element={<NoteCreate />}></Route>
        </Routes>
      </BrowserRouter>
      <App />
    </Provider>
  </StrictMode>
);