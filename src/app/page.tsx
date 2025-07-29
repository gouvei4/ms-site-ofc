import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HeroSection from './HeroSection/HeroSection';
import AboutSection from './About/AboutSection'
import ServicesSection from './ServiceSection/ServicesSection'
import WhyChooseSection from './WhyChooseSection/WhyChooseSection'
import LocationSection from './LocationSection/LocationSection'
import Footer from './Footer/Footer'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      < WhyChooseSection/>
      <LocationSection />
      <Footer />
    </main>
  )
}
