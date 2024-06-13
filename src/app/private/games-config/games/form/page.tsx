import React from 'react'
import CategoryFormComponent from './form'
import { PageDefinition } from '@/components/navigation-drawer/screen-routes'
import { PRIVATE_ROUTE_INITIAL_PATH } from '@/constants/route'

export const gameFormPageDefinition: PageDefinition = {
    label: 'Formulário de jogo',
    path: `${PRIVATE_ROUTE_INITIAL_PATH}/games-config/games/form`,
}

export default function GameFormPage() {
    return (
        <div>
            <h1>GameFormPage</h1>
            <CategoryFormComponent />
        </div>
    )
}
