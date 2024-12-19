import React  from "react";
import mega_blog from "./mega_blog.png"
import passGen from "./passGen.png"
import pokemon from "./pokemon.png"
import ttt from "./ttt.png"
import todo from "./todo.png"
import pfl from "./pfl.png"
export default function Project(){
    return (
       <> <div className="bg-slate-200 flex flex-row space-x-9 justify-center pt-24">
            
                <div className=" bg-slate-500 rounded-2xl w-1/4 text-white ">
                    <div className="p-10 pb-3 ">
                        <a href="https://mega-pr.vercel.app/" target="_blank"><img className="rounded-3xl" src={mega_blog} alt="" /></a></div>
                    <div>Mega_Blog Project</div>
                
                    <div className="underline text-red-900 hover:text-red-600 "><a target="_blank" href="https://github.com/khanasifhere/mega_pr">github link</a></div>
                    <div className="underline text-red-900 hover:text-red-600 "><a target="_blank" href="https://mega-pr.vercel.app/">vercel link</a></div>
                </div>

                <div className=" bg-slate-500 rounded-2xl w-1/4 text-white ">
                    <div className="p-10 pb-3">
                        <a target="_blank" href="https://pokemon-delta-one.vercel.app/"><img className="rounded-3xl" src={pokemon} alt="" /></a></div>
                    <div>pokemon-api based Project</div>
                
                    <div className="underline text-red-900 hover:text-red-600 "><a target="_blank" href="https://github.com/khanasifhere/pokemon">github link</a></div>
                    <div className="underline text-red-900 hover:text-red-600 "><a target="_blank" href="https://pokemon-delta-one.vercel.app/">vercel link</a></div>
                </div>
                <div className=" bg-slate-500 rounded-2xl w-1/4 text-white ">
                    <div className="p-10 pb-3">
                        <a target="_blank" href="https://portfolio-iota-indol-12.vercel.app"><img className="rounded-3xl" src={pfl} alt="" /></a></div>
                    <div>Portfolio</div>
                
                    <div className="underline text-red-900 hover:text-red-600 "><a href="https://github.com/khanasifhere/portfolio" target="_blank">github link</a></div>
                    <div className="underline text-red-900 hover:text-red-600 "><a  href="https://portfolio-iota-indol-12.vercel.app/about" target="_blank">vercel link</a></div>
                </div>
                
            

            
        </div>
          <div className="bg-slate-200 flex flex-row space-x-9 justify-center pt-24 pb-10">
            
          <div className=" bg-slate-500 rounded-2xl w-1/4 text-white ">
                    <div className="p-10 pb-3">
                        <a target="_blank" href="https://password-generator-beryl-three.vercel.app/"><img className="rounded-3xl" src={passGen} alt="" /></a></div>
                    <div>Password Generator</div>
                
                    <div className="underline text-red-900 hover:text-red-600 "><a target="_blank" href="https://github.com/khanasifhere/password_generator">github link</a></div>
                    <div className="underline text-red-900 hover:text-red-600 "><a target="_blank" href="https://password-generator-beryl-three.vercel.app/">vercel link</a></div>
                </div>
                <div className=" bg-slate-500 rounded-2xl w-1/4 text-white ">
                    <div className="p-10 pb-3">
                        <a target="_blank" href="https://game3-beta.vercel.app/"><img className="rounded-3xl" src={ttt} alt="" /></a></div>
                    <div>Tic-Tac_Toe</div>
                
                    <div className="underline text-red-900 hover:text-red-600 "><a target="_blank" href="https://github.com/khanasifhere/tic-tac-toe">github link</a></div>
                    <div className="underline text-red-900 hover:text-red-600 "><a target="_blank" href="https://game3-beta.vercel.app/">vercel link</a></div>
                </div>
                <div className=" bg-slate-500 rounded-2xl w-1/4 text-white ">
                    <div className="p-10 pb-3">
                        <a target="_blank" href="https://todo-two-chi.vercel.app/"><img className="rounded-3xl" src={todo} alt="" /></a></div>
                    <div>Todo</div>
                
                    <div className="underline text-red-900 hover:text-red-600 "><a target="_blank" href="https://github.com/khanasifhere/todo">github link</a></div>
                    <div className="underline text-red-900 hover:text-red-600 "><a target="_blank" href="https://todo-two-chi.vercel.app/">vercel link</a></div>
                </div>
          
      

      
  </div>
  </>
    )
}