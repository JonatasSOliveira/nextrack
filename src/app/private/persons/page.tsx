import ContainerWithNav from '@/components/container-with-nav/container-with-nav'
import { buttonVariants } from '@/components/ui/button'
import React, { Suspense } from 'react'
import { personsPageDefinition } from './page-definition'
import Link from 'next/link'
import PersonsList from './persons-list'

export default function PersonsPage() {
    return (
        <ContainerWithNav>
            <h1>{personsPageDefinition.title}</h1>
            <Link href='/private/persons/form' className={buttonVariants({ variant: "outline" })}>
                Nova pessoa
            </Link>
            <Suspense fallback={<p>Carregando...</p>}>
                <PersonsList /> 
            </Suspense>
        </ContainerWithNav>
    )
}
