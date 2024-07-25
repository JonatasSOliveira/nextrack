import React from 'react'
import PersonFormCard from '../form-card'
import { getPerson, updatePerson } from './actions'
import { PersonFormSchema } from '../form-schema'

export default async function EditPersonFormPage({params: {id: personId}}: {params: {id: string}}) {
    const person = await getPerson(personId)

    const handleAction = async (personData: PersonFormSchema) => {
        'use server'
        return await updatePerson(personData, personId)
    }

    return <PersonFormCard person={person} action={handleAction}/>
}
