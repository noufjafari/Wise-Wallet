import emailimg from "../Assets/email-img.png"
import twittimg from "../Assets//twitter.png"
export default function 
() {
  return (
    <div>
       <footer className="bg-[#dedde0] flex flex-col justify-center ">
        <div className="md:pt-4 pt-3 lg:pt-6 flex flex-col justify-center">
             <div className="p-4 mb-5 md:text-xl lg:text-2xl text-lg font-bold text-center">Contact Us</div>

          <div className="flex justify-center gap-5 mb-5 ">
          <a href="mailto:wisewallet81@gmail.com"> <img  className="hover:scale-110 lg:w-12 md:w-12 w-10" src={emailimg} alt="" />  </a>          
          <a href="https://twitter.com/wallet11694"> <img  className="hover:scale-110 lg:w-12 md:w-12 w-10" src={twittimg} alt="" /> </a>
          </div>
        </div>
      </footer> 
    </div>
  )
}
