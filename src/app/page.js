import Image from "next/image";
import Header from "./toppageCpmponent/Header";
import Footer from "./toppageCpmponent/Footer";
import TopPhoto from "./toppageCpmponent/topPhoto";
import Feature from "./toppageCpmponent/Feature";
import MenuList from "./toppageCpmponent/MenuList";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <TopPhoto/>
        <Feature/>
        <MenuList/>
      </main>
      <Footer />
    </>
  );
}
