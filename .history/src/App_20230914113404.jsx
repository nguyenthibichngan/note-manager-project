import { Header } from "components/Header/Header";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export function App() {

  useEffect(()=>{}, []);
  return <div>
    <Header />
    <Outlet />
    </div>;
}
