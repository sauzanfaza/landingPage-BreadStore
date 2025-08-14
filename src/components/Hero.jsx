export default function Hero() {
    return (
        <div className="relative w-full mt-14 h-screen bg-cover bg-center" style={{ backgroundImage: "url('/gallery/hero.jpg')" }}>
            {/* Overlay gelap */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Konten */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-8">
                <h1 className="text-2xl sm:text-6xl font-bold mb-2 font-josefin">
                    Experience the Taste of Artisan Sourdough
                </h1>
                <p className="text-lg sm:text-xl mb-6 font-josefin">
                    Each loaf is made with patience and passion for an unforgettable flavor
                </p>
                <a href="#menu" className="bg-[#5C3D2E] text-[#FEFED2] font-josefin text-sm px-4 py-2 rounded-full hover:bg-[#38211E] transition duration-300">
                    Explore Menu
                </a>
            </div>
        </div>
    )
}
