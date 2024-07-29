import ContainerWithNav from '@/components/container-with-nav/container-with-nav'
import React, { Suspense } from 'react'
import { categoriesPageDefinition } from './page-definition'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import CategoriesList from './categories-list'

export default function CategoriesPage() {
  return (
    <ContainerWithNav>
      <h1>{categoriesPageDefinition.title}</h1>
      <Link href='/private/games-config/categories/form' className={buttonVariants({ variant: "outline" })}>
        Nova Categoria
      </Link>
      <Suspense fallback={<p>Carregando...</p>}>
        <CategoriesList />
      </Suspense>
    </ContainerWithNav>
  )
}
