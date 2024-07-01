import ContainerWithNav from '@/components/container-with-nav/container-with-nav'
import { buttonVariants } from '@/components/ui/button'
import React from 'react'
import { personsPageDefinition } from './page-definition'
import Link from 'next/link'

export default function Persons() {
    return (
        <ContainerWithNav>
            <h1>{personsPageDefinition.title}</h1>
            <Link href='/private/persons/form' className={buttonVariants({ variant: "outline" })}>
                Nova pessoa
            </Link>
        </ContainerWithNav>
    )
}
