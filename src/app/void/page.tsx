
// import Link from "next/link";
import Header from "@/components/header"
// import Footer from "@/components/footer";


export default function page() {
    return (
        <div className="flex flex-col items-center w-full min-w-[200px]">

            <div className="xl:w-[1200px] lg:w-[1000px] md:w-[768px] w-full min-h-screen px-4 flex gap-4 flex-col justify-between py-2">
                <Header />
                
                <div className="flex-grow"></div>

                {/* <Footer /> */}
            </div>

        </div>
    );
}
