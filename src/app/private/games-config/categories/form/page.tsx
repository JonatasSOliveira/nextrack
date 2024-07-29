import React from 'react'
import { createCategory } from './actions'
import CategoryFormCard from './form.card'

export default function CategoryFormPage() {
    return <CategoryFormCard action={createCategory} />
}
