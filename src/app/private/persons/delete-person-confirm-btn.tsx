'use client'

import React from 'react'
import { deletePerson } from './actions'
import { AlertDialogAction } from '@/components/ui/alert-dialog'
import { PersonListResponseDTO } from '@/domain/dtos/person/response/list'

export interface DeletePersonConfirmBtnProps {
    person: PersonListResponseDTO
    handleGetPersons: () => void
}

export default function DeletePersonConfirmBtn({person, handleGetPersons}: DeletePersonConfirmBtnProps) {
    const handleDeletePerson = async () => {
        await deletePerson(person.id)
        handleGetPersons()
    }

    return <AlertDialogAction onClick={handleDeletePerson}>Confirmar</AlertDialogAction>
}