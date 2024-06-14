import React from 'react'
import { personGamesPageDefinition } from './page-definition'
import ContainerWithNav from '@/components/container-with-nav/container-with-nav'

export default function PersonGamesPage() {
    return (
        <ContainerWithNav>
            <h1>{personGamesPageDefinition.title}</h1>
        </ContainerWithNav>
    )
}
