import { Header } from "components/Header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

export function App() {
  const dispatch = useDispatch();

  async function fetchAllNotes(){
    const noteList = 
  }

  useEffect(()=>{}, []);
  return <div>
    <Header />
    <Outlet />
    </div>;
}
