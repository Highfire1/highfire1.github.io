import Image from "next/image";

// import Link from "next/link";
import Header from "@/components/header"
import Footer from "@/components/footer";

import HeroImage from '@/../public/clouds/purple.webp'
import Interact from "./interact";


export default function page() {
    return (
        <div className="flex flex-col items-center w-full min-w-[200px]">

            <div className="xl:w-[1200px] lg:w-[1000px] md:w-[768px] w-full px-4 flex gap-4 flex-col py-2">
                <Header />

                <Image src={HeroImage} className="h-[200px] w-full object-cover" alt="picture of sunset" priority/>


                <Interact />


                <Footer />
            </div>




        </div>
    );
}
