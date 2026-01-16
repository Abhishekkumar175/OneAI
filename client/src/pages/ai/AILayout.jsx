import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

export default function AILayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Outlet />
      </main>
    </>
  );
}
