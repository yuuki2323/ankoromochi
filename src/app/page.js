import Image from "next/image";
import Header from "./toppageCpmponent/Header";
import Footer from "./toppageCpmponent/Footer";
import TopPhoto from "./toppageCpmponent/TopPhoto";
import Feature from "./toppageCpmponent/Feature";
import MenuList from "./toppageCpmponent/MenuList";
import Info from "./toppageCpmponent/Info";
import Reservation from "./toppageCpmponent/Reservation";
import SalonFooter from "./toppageCpmponent/SalonFooter";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <TopPhoto />
        <Info />
        <Feature />
        <MenuList />
        <Reservation/>
        <SalonFooter/>
      </main>
      <Footer />
    </>
  );
}
