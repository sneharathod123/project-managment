"use client"
import { UserButton } from '@clerk/nextjs'
import {  ChartNoAxesGantt } from 'lucide-react'
import React from 'react'

function UserMenu() {
  return (
    <div>
        <UserButton appearance={{
            elements: {
                avatarBox: "w-10 h-10"
            }
        }}>
            <UserButton.MenuItems>
                <UserButton.Link label='my organization' labelIcon={<ChartNoAxesGantt size={15}/>} href='/onboarding'/> 
                <UserButton.Action label='manageAccount'/>
            </UserButton.MenuItems>
        </UserButton>
    </div>
  )
}

export default UserMenu