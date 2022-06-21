import Head from "next/head";
import Image from "next/image";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="w-4/5 mx-auto mt-36 grid grid-cols-4">
      <Sidebar />
      <div className="col-span-3">
        <Content />
      </div>
    </div>
  );
}
