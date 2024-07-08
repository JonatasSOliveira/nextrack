import React from 'react'
import PersonFormCard from './form-card'
import { createPerson } from './actions'

export default function CreatePersonFormPage() {
    return <PersonFormCard action={createPerson}/>
}
