import React from 'react'
import NavigationDrawer from '../navigation-drawer/navigation-drawer'

interface ContainerWithNavProps {
    children: React.ReactNode
}

export default function ContainerWithNav({ children }: ContainerWithNavProps) {
    return (
        <div className='h-screen w-screen flex flex-col'>
            <div className='flex-1'>
                {children}
            </div>
            <NavigationDrawer />
        </div>
    )
}
