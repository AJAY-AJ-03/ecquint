import AboutUs from "./components/AboutUs"
import HomePage from "./components/Home"
import Navbar from "./components/Navbar"

const page = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <AboutUs />
    </div>
  )
}
export default page