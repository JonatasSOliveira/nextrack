import { PageDefinition } from '@/components/navigation-drawer/screen-routes'
import { PRIVATE_ROUTE_INITIAL_PATH } from '@/constants/route'
import React from 'react'

export const gamesPageDefinition: PageDefinition = {
  label: 'Jogos',
  path: `${PRIVATE_ROUTE_INITIAL_PATH}/games-config/games`,
}

export default function GamesPage() {
  return (
    <div>GamesPage</div>
  )
}
