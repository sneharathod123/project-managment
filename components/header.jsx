import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { PenBox } from 'lucide-react'
import UserMenu from './user-menu'
import { checkUser } from '@/lib/checkUser'

async function Header () {
    await checkUser();
    return (
        <header className='container  mx-auto'>
            <nav className='py-6 py-4 flex justify-between items-center'>
                <Link href="/">
                    <Image
                        src={"/logo2.png"}
                        width={200} height={58}
                        className='h-10 w-auto object-contain'
                        alt="logo"
                    />
                </Link>


                <div className="flex items-center gap-4">
                    <Link href="/project/create">
                        <Button variant="destructive" className="flex items-center gap-2">
                            <PenBox size={18} />
                            <span className="hidden md:inline">Create Project</span>
                        </Button>
                    </Link>
                    <SignedOut>
                        <SignInButton forceRedirectUrl="/onboarding">
                            <Button variant="outline">Login</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserMenu />
                    </SignedIn>
                </div>
            </nav>
        </header>
    )
}

export default Header