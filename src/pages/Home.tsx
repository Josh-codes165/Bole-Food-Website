import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import SignatureDishes from "../components/SignatureDishes";
import AboutSection from "../components/AboutSection";
import FullMenu from "../components/FullMenu";
import Experience from "../components/Experience";
import Testimonials from "../components/Testimonials";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";


export default function Home(){
    return (
        <main>
            <NavBar />
            <Hero/>
            <SignatureDishes/>
            <AboutSection/>
            <FullMenu/>
            <Experience/>
            <Testimonials/>
            <FinalCTA/>
            <Footer/>
        </main>
    )
}