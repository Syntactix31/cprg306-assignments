"use client"

import { useUserAuth } from "../contexts/AuthContext.js";
import Link from "next/link";
import Image from 'next/image';
import myImg from '../assets/opm_1.gif';

export default function Page({  }) {

  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Sign into FireBase with Github Authentication
  // await gitHubSignIn();

  // Sign Out of FireBase
  // await firebaseSignOut();

  //Displays some information about the user and renders buttons
  return (
    <div className="bg-blue-300 h-120 w-120 mt-35 mx-auto rounded-4xl p-4">
      {
        !user ? (<button onClick={gitHubSignIn} className="mt-40 active:scale-90 mx-auto text-gray-500 flex w-80 rounded-3xl text-2xl text-center justify-center font-bold bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 hover:bg-green-500 hover:text-white">Log in with GitHub</button>) : (
        <div>
          <p className="text-white text-2xl font-extrabold text-center ">
            Welcome, {user.displayName}! <span className="font-normal">({user.email})</span>
          </p>


          <Image
            src={myImg}
            alt="Default Profile Picture"
            className="scale-90 mb-7"
          />

          <div className="flex justify-between ">
            <button onClick={firebaseSignOut}
              className=" p-2 h-20 w-40 bg-blue-500 rounded-full cursor-pointer cursor:pointer hover:scale-95 hover:bg-white active:100 font-bold text-2xl hover:text-blue-500 hover:border-4 hover:border-blue-500 active:scale-85 text-white ml-4">
                Log Out    
            </button>

          
            <Link href="/week-9/shopping-list" className="h-fit bg-red-500 text-white p-6 text-center font-bold rounded-full my-auto mr-4 hover:scale-110 hover: :font-extrabold active:scale-100 hover:bg-red-500 hover:underline">Go to Shopping List &#10140;</Link>
          </div>
        </div>
        )
      }
      
      
    </div>


  );
} 






/********   TO-DO    *********
 * 
 * Add Event listener alert for confirmation of log out
 * 
 * SHOW FULLSCREEN ONE PUNCH MAN PUNCH ON SIGN OUT
 * 
 * CHANGE COLOUR ON BACKGROUND OF LOG IN CARD TO RED BUT KEEP THE BLUE FOR INITIAL SIGN IN
 * 
 * 
 * 
 * figure out how to import hdr into web port
 * 
 * touch up design a bit
 * 
 * 
 */
