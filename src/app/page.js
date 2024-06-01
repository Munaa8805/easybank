import WhyCon from "@/components/WhyCon";
import Header from "../components/Header";
import MainInfo from "@/components/MainInfo";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white font-light">
      <Header />
      <MainInfo />
      <WhyCon />
      <Articles />
      <Footer />
    </main>
  );
}
