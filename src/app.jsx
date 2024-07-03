
import Navbar from "./landing-page/components/navbar"
import LandingPageLazyLoading from "./landing-page/landing-page"


function App() {
 
  return (
    <>
    {/* // routing will be performed here  */}
    <div>
      <Navbar />
      <LandingPageLazyLoading />
    </div>
    </>
  )
}

export default App
