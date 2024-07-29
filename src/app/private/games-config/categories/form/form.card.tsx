import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import CategoryFormComponent, { CategoryFormComponentProps } from './form'

export default function CategoryFormCard(props: CategoryFormComponentProps) {
    return (
        <Card className='m-auto w-5/6 sm:max-w-[450px]'>
            <CardHeader>
                <CardTitle>Formulário de Pessoa</CardTitle>
                <CardDescription>Informe os dados da pessoa</CardDescription>
            </CardHeader>
            <CategoryFormComponent {...props} />
        </Card>
    )
}
