import React from "react";

function Multistep(){
    return(
        <div className="h-screen w-screen  flex flex-row justify-center items-center">
            <div className="h-72 w-80 flex flex-col justify-center items-center border-2 border-black rounded-md">
                <h1 className="font-semibold font-mono text-xl">Step 1/3</h1>
                <form className="flex flex-col m-7 font-mono">

                    <input type={"text"} 
                    className="leading-10 border-2 border-black rounded-3xl text-center text-slate-900 placeholder-gray-800" 
                    placeholder="Nome"></input>
                    <input type={"email"} 
                    className="leading-10 border-2 border-black rounded-3xl text-center mt-4  placeholder-gray-800 w-64"
                    placeholder="E-mail"
                    required
                    ></input>
                    <div className=" flex flex-col justify-end items-end">
                        <button type={"submit"}
                        value="Próximo"
                        className="mt-4 p-3 bg-black w-20 text-white rounded-3xl">NEXT</button>
                    </div>

{/*https://www.youtube.com/watch?v=suaST5FimQc*/} link do video pro result
                </form>

            </div>
        </div>
    )
}


export default Multistep;