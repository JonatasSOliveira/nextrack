import React from 'react'
import { categoriesPageDefinition } from './page-definition'
import DefaultListPage from '@/components/default-list-page/default-list-page'
import { deleteCategory, getCategories } from './actions'

export default function CategoriesPage() {
    return <DefaultListPage formUrl='/private/games-config/categories/form'
        getDataListAction={getCategories}
        deleteData={deleteCategory}
        idItemKey='id'
        newRegisterLabel='Nova Categoria'
        title={categoriesPageDefinition.title}
        titleItemKey='name' />
}
