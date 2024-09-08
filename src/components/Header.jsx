import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/clerk-react'
import { BriefcaseBusiness, PenBox } from 'lucide-react'

const Header = () => {

   const[showSignIn,setShowSignIn]=useState(false)
   const[search,sertSearch]=useSearchParams()
   useEffect(()=>{
      if(search.get('sign-in')){
         setShowSignIn(true)
      }
   },[search])
   const handleOverlayClick=(e)=>{
      if(e.target===e.currentTarget){
         setShowSignIn(false)
         sertSearch({})
      }
   }
  return (
   <>
    <nav className='py-4 flex justify-between items-center'>
        <Link>
        <img src="/logoipsum-325.svg" alt=" logo" sizes='20' className='text-white'/>
        </Link>
      <div className='flex gap-8'>
     <SignedOut>
     <Button variant="outline" onClick={()=>setShowSignIn(true)}>Login</Button>
     </SignedOut>
    
     <SignedIn>
     <Link to="/post-job">
     <Button variant="destructive" className="rounded-full">
      <PenBox size={20} className='mr-2'/>
      Post a job</Button></Link>
        <UserButton
        appearance={{
         elements:{
            avatarBox:"w-10 h-10"
         }
        }}>
         <UserButton.MenuItems>
            <UserButton.Link
            label="My Jobs"
            labelIcon={<BriefcaseBusiness size={15}/>}
            href='/my-jobs'
            />
         </UserButton.MenuItems>

        </UserButton>
     </SignedIn>
     </div>  
    </nav>
    {showSignIn && <div className='flex fixed justify-center items-center bg-black bg-opacity-50 inset-0 z-10'
    onClick={handleOverlayClick}>
        <SignIn
        signUpFallbackRedirectUrl='/onboarding'
        fallbackRedirectUrl='/onboarding'/>
      </div>
      }
      </>
  )
}

export default Header
