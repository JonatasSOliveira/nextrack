import React from 'react'
import CategoryFormComponent from './form'
import { PRIVATE_ROUTE_INITIAL_PATH } from '@/constants/route'
import { PageDefinition } from '@/components/navigation-drawer/screen-routes'

export const categoryFormPageDefinition: PageDefinition = {
    label: 'Formulário de categoria',
    path: `${PRIVATE_ROUTE_INITIAL_PATH}/games-config/categories/form`,
}

export default function CategoryFormPage() {
    return (
        <div>
            <h1>CategoryFormPage</h1>
            <CategoryFormComponent />
        </div>
    )
}
