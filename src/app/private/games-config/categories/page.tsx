import ContainerWithNav from '@/components/container-with-nav/container-with-nav'
import React from 'react'
import { categoriesPageDefinition } from './page-definition'

export default function CategoriesPage() {
  return (
    <ContainerWithNav>
      <h1>{categoriesPageDefinition.title}</h1>
    </ContainerWithNav>
  )
}
