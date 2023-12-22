import Header from "@/components/Dashboard/Header"
import { getAnimeResponse } from "@/service/Api"
import { authUserSession } from "@/service/auth-libs"
import prisma from "@/service/prisma"

const { default: Image } = require("next/image")
const { default: Link } = require("next/link")


const Page = async({ }) => {
    const user = await authUserSession()
    const collection = await prisma.collection.findMany({
        where: {user_email: user?.email},
    })

    return (
        <section className="p-6">
            <Header title="Collections"/>
            <div className="grid sm:grid-cols-5 grid-cols-2 gap-4 p-6">
                {collection.map((collection, index) => (
                <Link key={index} href={`/anime/${collection.anime_mal_id}`} className="relative">
                    <Image src={collection.anime_image} alt="" width={200} height={250} className="w-full"/>
                    <div className="absolute flex items-center justify-center bottom-0 w-full h-16 bg-black scalex">
                    <h1 className="text-xl font-bold text-center text-color-accent ">{collection.anime_title}</h1>
                    </div>
                </Link>
                ))}
            </div>
        </section>
    )
}

export default Page