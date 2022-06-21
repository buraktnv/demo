import Content from "../components/Content";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="w-4/5 mx-auto mt-8 grid grid-cols-4">
      <Sidebar />
      <div className="col-span-3">
        <Content />
      </div>
    </div>
  );
}
