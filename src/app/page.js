import AboutUs from "./components/AboutUs"
import Careers from "./components/Careers"
import HomePage from "./components/Home"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"

const page = () => {
  return (
    <div>
      <Navbar  />
      <HomePage />
      <AboutUs/>
      <Services />
      <Portfolio />
      <Careers />
      
    </div>
  )
}
export default page