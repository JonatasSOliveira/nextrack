import React from 'react'
import PersonFormComponent from './form'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function PersonFormPage() {
    return (
        <Card className='m-auto w-5/6 sm:max-w-[450px]'>
            <CardHeader>
                <CardTitle>Formulário de Pessoa</CardTitle>
                <CardDescription>Informe os dados da pessoa</CardDescription>
            </CardHeader>
            <PersonFormComponent />
        </Card>
    )
}
