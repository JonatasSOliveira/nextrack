import { PageDefinition } from '@/components/navigation-drawer/screen-routes'
import { PRIVATE_ROUTE_INITIAL_PATH } from '@/constants/route'
import React from 'react'

export const categoriesPageDefinition: PageDefinition = {
  label: 'Categorias',
  path: `${PRIVATE_ROUTE_INITIAL_PATH}/games-config/categories`,
}

export default function CategoriesPage() {
  return (
    <div>CategoriesPage</div>
  )
}
