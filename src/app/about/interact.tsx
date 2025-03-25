"use client"

// concept: interactive game that is fully interactive throughout the website
// unfortunately i don't have enough experience for that + i want to learn three.js first
// so this is a stopgap

import Image from 'next/image';
import React from 'react';

interface VNPage {
    title: string;
    image: string;
    text: string;
    buttonText1: string | null;
}
const pages: VNPage[] = [
    // page 0 is when we're waiting for localstorage to be ready in react so we need a placeholder
    // otherwise we would flash page 1 then the correct page and that would be incorrect.
    {
        title: "Who is Anderson Tseng?",
        image: "/about/darkness.png",
        text: "",
        buttonText1: null
    },
    {
        title: "Who is Anderson Tseng?",
        image: "/about/anderson_2.jpg",
        text: "Welcome to my tiny little corner of the internet.\nHere, I catalogue some stuff about me.",
        buttonText1: "That's it?"
    },
    {
        title: "Who is Anderson Tseng?",
        image: "/about/anderson_3.jpg",
        text: "Yup, thats all.\n👍",
        buttonText1: "mhm."
    },
    {
        title: "Who is Anderson Tseng?",
        image: "/about/anderson_1.jpeg",
        text: "What else do you want to know about me?\n;-;",
        buttonText1: "hobbies?"
    },
    {
        title: "Who is Anderson Tseng?",
        image: "/about/metropolis.jpg",
        text: "uhh I play dungeons and dragons thats considered a hobby right?\ni've run a few one-shots that are loosely based around metropolis at metrotown (long story)",
        buttonText1: "mhm."
    },
    {
        title: "Who is Anderson Tseng?",
        image: "/about/planner.jpg",
        text: "and i code! i make fun little projects! like this website.\nand some other stuff besides",
        buttonText1: "that is definitely considered work. or studying."
    },
    {
        title: "Who is Anderson Tseng?",
        image: "/about/clouds.jpg",
        text: "ok ok i take photos of clouds. and sometimes people or animals or other stuff.\nbut mostly clouds.",
        buttonText1: "that is cool."
    },
    {
        title: "Who is Anderson Tseng?",
        image: "/about/mal.png",
        text: "Also i'm pretty into anime and manga. and some vtubers.\nok and maybe i cosplay. occasionally. you may or may not find me at some anime conventions in vancouver. hmu if you do",
        buttonText1: "thats very brave to admit on a professional website."
    },
    {
        title: "Who is Anderson Tseng?",
        image: "/about/books.png",
        text: "I'm very slowly reading through the diskworld series by terry pratchett. slow progress but we'll get there eventually.\nIn general i'm a really big fan of any story with sci-fi and fantasy themes.",
        buttonText1: "GNU Terry Pratchett"
    },
    {
        title: "Who is Anderson Tseng?",
        image: "/about/darkness.png",
        text: "\n",
        buttonText1: "...?"
    },
    {
        title: "Who is Anderson Tseng?",
        image: "/about/construction.png",
        text: "well, this is awkward...\nIt looks like this website is still under construction.",
        buttonText1: "aw."
    },
    {
        title: "Who is Anderson Tseng?",
        image: "/about/shambles.png",
        text: "it looks like Anderson is tired of writing dialogue and needs to go eat dinner.\nBut he'll be back. soon!",
        buttonText1: "mhm."
    },
    {
        title: "Who is Anderson Tseng?",
        image: "/about/sunset.jpg",
        text: "If you got this far, you should reach out :)\nFeel free to dm me on discord or to connect on linkedin. i'd love to hear from you.",
        buttonText1: "where's your discord?"
    },
    {
        title: "Who is Anderson Tseng?",
        image: "/about/W.png",
        text: "eh its out there. do some cybersleuthing.\nor you can join the langara computer science discord and look for Andy",
        buttonText1: "I understand that this is an invitation to connect but that I shouldn't feel obligated to if I'm not interested."
    },
    {
        title: "Who is Anderson Tseng?",
        image: "/about/sunset_2.png",
        text: "Alright, that's all the content I have for you today.\nThanks for clicking through <3",
        buttonText1: "restart."
    },
];

const Interact = () => {
    const [currentPage, setCurrentPage] = React.useState(0);
    const [hasMounted, setHasMounted] = React.useState(false);

    // After component mounts, update from localStorage
    React.useEffect(() => {
        setHasMounted(true);
        const saved = localStorage.getItem('ABOUT_currentPage');
        if (saved) {
            setCurrentPage(parseInt(saved));
        }
    }, []);

    React.useEffect(() => {
        if (hasMounted) {
            localStorage.setItem('ABOUT_currentPage', currentPage.toString());
        }
    }, [currentPage, hasMounted]);

    const handleNextPage = () => {
        let new_page = (currentPage + 1) % pages.length;
        if (new_page == 0) {
            new_page = 1;
        }
        setCurrentPage(new_page);
    };

    // Use a consistent page during server rendering
    const page = pages[currentPage];

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4 w-full">
                <div className="h-[300px] min-w-[200px] border-2 border-slate-600 rounded z-10">
                    <Image 
                        src={page.image} 
                        height='300' 
                        width='200' 
                        className="h-[297px] w-[400px] object-cover rounded-sm z-0" 
                        alt="sorry, alt not implemented" 
                        priority
                    />
                </div>

                <div className="w-full border-2 border-gray-800 rounded p-2">
                    <div className="">
                        <p className="font-bold">{page.title}</p>
                        {page.text.split('\n').map((line, i) => (
                            <p key={i}>{line}</p>
                        ))}
                        {page.buttonText1 && (
                            <button 
                                onClick={handleNextPage}
                                className="px-4 py-2 mt-4 text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-colors duration-200 min-w-60"
                            >
                                {page.buttonText1}
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* inventory, to be implemented */}
            <div className="h-[200px] w-full border-2 border-gray-800 rounded p-2">
                
            </div>
        </div>
    );
};

export default Interact;