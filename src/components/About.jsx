export default function About() {
    return(
        <div className="flex flex-col md:flex-row items-center bg-yellow-50 min-h-screen py-10 px-5">
        <div className="w-full md:w-1/2 p-6 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4 font-josefin">Judul Sourdough</h2>
            <p className="text-gray-800 font-josefin">
            this is about sourdough bread website, soon i will write some paragraph here...
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorem aspernatur iure rem accusamus commodi at porro omnis. Inventore tempore iusto molestias aperiam exercitationem vitae recusandae nulla quisquam ut. Minus?
            </p>
        </div>
        <div className="flex flex-row items-center w-1/2">
            <img src="/gallery/loaf1.jpeg" alt="" className="mix-blend-multiply" />
        </div>
        </div>

    )
}