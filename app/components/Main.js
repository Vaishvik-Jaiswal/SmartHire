"use client";
import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Main() {
    const router = useRouter();

    const handleStartNowClick = () => {
        router.push('/ResumeLanding'); 
    };
    return (
        <div>
            <div className="flex flex-col items-center justify-center w-full mx-auto mt-9">
                <h1 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-500">Simplify Your Hiring
                    & Preparations!</h1>
                <div className="text-center text-muted-foreground w-3/4 md:text-xl mt-4">
                    SmartHire streamlines recruitment with AI-powered tools,
                    saving you time and helping you find the perfect candidates and for candidate interview preparation dashboard.
                </div>
            </div>
            <div className='flex flex-row'>
                <div className='flex flex-col items-center justify-center w-[500px] h-[420px] bg-[#DEF9FF] mt-16 rounded-xl ml-40' >
                    <Image src='/assets/Group 39.png' width={200} height={300} />
                    <p className='text-center text-3xl font-bold text-blue-500'>Resume Shortlisting</p>
                    <div className="text-center text-muted-foreground w-3/4 md:text-xl mt-1">
                        Curating resumes efficiently to match top talent with organizational role needs
                    </div>
                    <button className="bg-[#3B82F6] text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-2
                    " onClick={handleStartNowClick}>
                    Click Here
                    </button>
                </div>
                <div className='flex flex-col items-center justify-center w-[500px] bg-[#DEF9FF] mt-16 rounded-xl ml-40' >
                    <Image src='/assets/Group 40.png' width={230} height={400} />
                    <p className='text-center text-3xl font-bold text-blue-500'>Interview Prep</p>
                    <div className="text-center text-muted-foreground w-3/4 md:text-xl mt-1">
                    AI-driven interview prep: feedback, skill analysis, progress tracking, alignment.
                    </div>
                    <button className="bg-[#3B82F6] text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-2">
                    Click Here
                    </button>
                </div>
            </div>


        </div>
    )
}

export default Main