import ContainerWithNav from '@/components/container-with-nav/container-with-nav'
import React from 'react'
import { personsPageDefinition } from './page-definition'

export default function Persons() {
    return (
        <ContainerWithNav>
            <h1>{personsPageDefinition.title}</h1>
        </ContainerWithNav>
    )
}
