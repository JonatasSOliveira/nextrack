
import ContainerWithNav from '@/components/container-with-nav/container-with-nav'
import React from 'react'
import { homePageDefinition } from './page-definition'

export default function HomePage() {
  return (
    <ContainerWithNav>
      <h1>{homePageDefinition.title}</h1>
    </ContainerWithNav>
  )
}
