import { div } from "motion/react-client"

export default function Gallery() {
    const gallery = [
        {id:1, pic: "/gallery/gallery1.jpeg", desc: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet made with love and passion"},
        {id:2, pic: "/gallery/gallery2.jpeg", desc: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet made with love and passion"},
        {id:3, pic: "/gallery/gallery3.jpeg", desc: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet made with love and passion"},
        {id:4, pic: "/gallery/gallery4.jpeg", desc: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet made with love and passion"},
        {id:5, pic: "/gallery/gallery5.jpeg", desc: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet made with love and passion"},
        {id:6, pic: "/gallery/gallery6.jpeg", desc: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet made with love and passion"},
    ]

    return(
        <>
        <div className="min-h-screen flex flex-col items-center bg-[#38211E] p-15">
        <h1 className="flex items-center mb-4 text-2xl font-josefin text-[#FEFED2] text-center">Take a look with our loaf!</h1>
        <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
            {gallery.map((picture) => (
                <div className="bg-white mb-4 rounded-sm">
                    <div
                    key={picture.id}
                    className="m-4"
                    >
                        <img src={picture.pic} alt="gallery" className="rounded-sm w-full h-64 object-cover"/>
                    </div>
                    <div className="flex items-center px-4 pb-4 text-sm font-josefin text-[#38211E]">
                        <p className="text-center">{picture.desc}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
        </>
    )
}