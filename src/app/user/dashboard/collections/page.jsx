import Header from "@/components/Dashboard/Header"

const { default: Image } = require("next/image")
const { default: Link } = require("next/link")


const Page = () => {
    return (
        <section className="p-6">
            <Header title="Collections"/>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4">
                <Link href="/" className="relative border-2 border-color-accent">
                    <Image src="" alt="" width={200} height={250} className="w-full"/>
                    <div className="absolute flex items-center justify-center bottom-0 w-full h-16 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">
                    <h1 className="text-xl font-bold text-center">Judul</h1>
                    </div>
                </Link>
                <Link href="/" className="relative border-2 border-color-accent">
                    <Image src="" alt="" width={200} height={250} className="w-full"/>
                    <div className="absolute flex items-center justify-center bottom-0 w-full h-16 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">
                    <h1 className="text-xl font-bold text-center">Judul</h1>
                    </div>
                </Link>
                <Link href="/" className="relative border-2 border-color-accent">
                    <Image src="" alt="" width={200} height={250} className="w-full"/>
                    <div className="absolute flex items-center justify-center bottom-0 w-full h-16 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">
                    <h1 className="text-xl font-bold text-center">Judul</h1>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Page