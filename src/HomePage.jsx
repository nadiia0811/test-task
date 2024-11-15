import Hero from "./components/Hero";
import Advantages from "./components/Advantages";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import OurCourses from "./components/OurCourses";
import LeadMagnet from "./components/LeadMagnet";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./index.css";


const HomePage = () => {

  return (
      <div className="mx-auto flex flex-col w-custom_full">
        <Hero />
        <Advantages />
        <AboutUs />
        <OurCourses />
        <LeadMagnet />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
  )
}

export default HomePage;
