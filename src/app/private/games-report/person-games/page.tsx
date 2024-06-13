import { PageDefinition } from '@/components/navigation-drawer/screen-routes'
import { PRIVATE_ROUTE_INITIAL_PATH } from '@/constants/route'
import React from 'react'

export const personGamesPageDefinition: PageDefinition = {
    label: 'Jogos por pessoa',
    path: `${PRIVATE_ROUTE_INITIAL_PATH}/games-report/person-games`,
}

export default function PersonGamesPage() {
    return (
        <div>PersonGames</div>
    )
}
