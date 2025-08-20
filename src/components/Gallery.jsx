import { RiRedPacketFill } from "react-icons/ri"

export default function Gallery() {
    const gallery = [
        {id:1, pic: "/gallery/gallery3.jpeg", desc: "Original One, you can match themwith anything you like. And butter its the most favorite, and with butter, garlic, and oregano also the best", price: "Rp.35000"},
        {id:2, pic: "/gallery/kismis.jpeg", desc: "Classic sourdough with a twist soft, tangy bread loaded with sweet, juicy raisins. A timeless favorite that pairs perfectly with coffee or tea.", price: "Rp.40000"},
        {id:3, pic: "/gallery/coklat.jpeg", desc: "A perfect mix of chewy sourdough and rich, gooey chocolate. Sweet, slightly bitter, and oh-so-indulgent — one bite is never enough!", price: "Rp.40000"},
        {id:4, pic: "/gallery/blueberry.jpeg", desc: "Bursting with flavor! Fresh blueberries baked into our signature sourdough for a sweet and fruity bite in every slice.", price: "Rp.45000"},
        {id:5, pic: "/gallery/cheesejalapeno.jpeg", desc: "Spicy meets cheesy! Tangy sourdough packed with jalapeños and melted cheese — bold, fiery, and absolutely irresistible.", price: "Rp.50000"},
        {id:6, pic: "/gallery/hamcheese.jpeg", desc: "Savory, cheesy, and hearty. Filled with smoky ham and melted cheese, this sourdough is a comfort classic you’ll crave again and again.", price: "Rp.50000"},
    ]

    return(
        <>
        <div id="menu" className="min-h-screen flex flex-col items-center bg-[#38211E] p-15">
        <h1 className="flex items-center mb-4 text-2xl font-josefin text-white text-center">Take a look with our loaf!</h1>
        <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4">
            {gallery.map((picture) => (
                <div className="bg-white mb-4 rounded-sm hover:scale-105 transition-transform duration-300">
                    <div
                    key={picture.id}
                    className="m-4"
                    >
                        <img src={picture.pic} alt="gallery" className="rounded-sm w-full h-64 object-cover"/>
                    </div>
                    <div className="flex items-center px-4 pb-2 text-sm font-josefin text-[#38211E]">
                        <p className="text-center">{picture.desc}</p>
                    </div>
                    <div className="flex items-center justify-center pb-2 text-sm font-josefin text-[#38211E]">
                        <p className="text-center">{picture.price}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
        </>
    )
}