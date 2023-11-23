import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="bg-gray-800">
      <Header />
      <div className="flex flex-col justify-center items-center">
        <Intro />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
