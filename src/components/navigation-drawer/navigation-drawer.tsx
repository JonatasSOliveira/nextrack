import React from 'react'
import { Button, buttonVariants } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, DrawerClose } from '@/components/ui/drawer'
import Link from 'next/link'
import { PageDefinition } from './screen-routes'
import { homePageDefinition } from '@/app/private/home/page'
import { personGamesPageDefinition } from '@/app/private/games-report/person-games/page'
import { categoriesPageDefinition } from '@/app/private/games-config/categories/page'
import { gamesPageDefinition } from '@/app/private/games-config/games/page'


export default function NavigationDrawer() {
    const navRoutes: PageDefinition[] = [
        homePageDefinition,
        personGamesPageDefinition,
        categoriesPageDefinition,
        gamesPageDefinition,
        personGamesPageDefinition
    ]

    return (
        <Drawer>
            <DrawerTrigger>
                Ir para
            </DrawerTrigger>
            <DrawerContent>
                {/* <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader> */}
                {navRoutes.map((screen, index) => (
                    <Link key={index} href={screen.path} className={buttonVariants({ variant: "link" })}>
                        {screen.label}
                    </Link>
                ))}
                {/* <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter> */}
            </DrawerContent>
        </Drawer>
    )
}
