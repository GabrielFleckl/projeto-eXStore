import controller from "../../assets/icon_controller.png"
import verify from "../../assets/icon_verify.png"
import xboxLogo from "../../assets/icon_xbox.png"

function WhyExstore() {
  return (
    <section className="flex flex-col justify-center items-center p-16 gap-16 "> 
      <div className="text-center mt-7">
        <h1 className="font-bold text-4xl mb-4 text-primaryBlack">Why eXStore?</h1>
        <p className="text-lg px-4 md:px-0 w-96 font-semibold text-secondaryBlack">We are the official Xbox partner in Indonesia that provides official video games.</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-20 items-center justify-center">
        <div className="flex flex-col gap-5 items-center">
          <img className="w-iconSize" src={controller} alt="" />
          <p className="font-medium text-xl w-60 text-center text-primaryBlack">5000+ video games available</p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img className="w-iconSize" src={verify} alt="" />
          <p className="font-medium text-xl w-60 text-center text-primaryBlack">Trusted by 100.000+ customers</p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img className="w-iconSize" src={xboxLogo} alt="" />
          <p className="font-medium text-xl w-60 text-center text-primaryBlack">Available for all Xbox consoles</p>
        </div>
      </div>
    </section>
  )
}

export default WhyExstore