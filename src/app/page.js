import AboutUs from "./components/AboutUs"
import Careers from "./components/Careers"
import GetInTouch from "./components/GetInTouch"
import HomePage from "./components/Home"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"

const page = () => {
  return (
    <div className="background-color: rgb(19, 19, 24);
">
      <Navbar  />
      <HomePage />
      <AboutUs/>
      <Services />
      <Portfolio />
      <Careers />
      <GetInTouch />
    </div>
  )
}
export default page