import React from 'react'
import { gamesPageDefinition } from './page-definition'
import ContainerWithNav from '@/components/container-with-nav/container-with-nav'

export default function GamesPage() {
  return (
    <ContainerWithNav>
      <h1>{gamesPageDefinition.title}</h1>
    </ContainerWithNav>
  )
}
