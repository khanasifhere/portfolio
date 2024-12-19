import React from 'react'
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
export default function Home() {
    
    return (
        <div className=" bg-gray-200 rounded-3xl mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden pb- text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Hi,myself Asif Khan
                            <span className="hidden sm:block text-2xl">I am a Computer Science pre final year student at IIIT Kota, with a focus on web development, Data Structures and Algorithms.</span>
                        </h2>

                        
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className=" pb-8w-96 rounded-full" src="https://avatars.githubusercontent.com/u/129986128?v=4" alt="image1" />
                </div>
                
                
            </aside>

            
        </div>
    );
}