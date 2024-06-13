
import NavigationDrawer from '@/components/navigation-drawer/navigation-drawer'
import { PageDefinition } from '@/components/navigation-drawer/screen-routes'
import { PRIVATE_ROUTE_INITIAL_PATH } from '@/constants/route'
import React from 'react'

export const homePageDefinition: PageDefinition = {
  path: `${PRIVATE_ROUTE_INITIAL_PATH}/home`,
  label: 'Início'
}

export default function HomePage() {
  return (
    <div className='h-screen w-screen flex items-end justify-center'>
      <NavigationDrawer />
    </div>
  )
}
