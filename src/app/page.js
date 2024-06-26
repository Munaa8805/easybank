import WhyCon from "@/components/WhyCon";
import Header from "../components/Header";
import MainInfo from "@/components/MainInfo";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white font-light">
      <header className="z-50 sticky bg-white ">
        <Header />
      </header>
      <MainInfo />
      <WhyCon />
      <Articles />
      <Footer />
    </main>
  );
}
