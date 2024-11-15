import Hero from "./components/Hero";
import Advantages from "./components/Advantages";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import OurCourses from "./components/OurCourses";
import LeadMagnet from "./components/LeadMagnet";
import "./index.css";


const HomePage = () => {

  return (
      <>
        <Hero />
        <Advantages />
        <AboutUs />
        <OurCourses />
        <LeadMagnet />
        <Testimonials />
      </>
  )
}

export default HomePage;
