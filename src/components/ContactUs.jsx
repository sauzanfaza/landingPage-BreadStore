import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

export default function ContactUs() {
    return (
        <div id="order" className="relative w-full min-h-screen bg-cover bg-center py-10 pl-20" style={{ backgroundImage: "url('/gallery/contact.jpeg')"}}>
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative grid justify-start">
                <h1 className="text-left text-2xl font-semibold font-josefin mb-4 text-white">Stay in Touch</h1>
                <p className="text-white text-sm font-semibold mb-1 font-josefin">Email</p>
                <input type="text" placeholder="Email" className="bg-slate-50 rounded-md text-sm mb-4 p-2 font-josefin focus:outline-[#38211E]"/>
                <p className="text-white text-sm font-semibold mb-1 font-josefin">Message</p>
                <input type="text" placeholder="Message" className="bg-slate-50 h-20 font-josefin rounded-md text-sm p-2 focus:outline-[#38211E]"/>
            </div>
            <div className="mt-8 relative z-10">
                <h1 className="text-white mb-2 text-md font-josefin font-bold">Or, Visit Our Social Media!</h1>
                <div className="flex gap-4">
                <a href="https://wa.me/+6281399078013" className="text-2xl text-[#38211E] hover:text-[#5C3E2D]"><FaWhatsappSquare /></a>
                <a href="https://www.instagram.com/sauzanfaza?igsh=MXhhODlmaHV2NnB2cA==" className="text-2xl text-[#38211E] hover:text-[#5C3E2D]"> <FaSquareInstagram /></a>
                <a href="https://www.tiktok.com/@sourdouhbreadsadang?_t=ZS-8z1s8e67wjR&_r=1" className="text-2xl text-[#38211E] hover:text-[#5C3E2D]"><AiFillTikTok /></a>
                </div>
            </div>
        </div>
    )
}