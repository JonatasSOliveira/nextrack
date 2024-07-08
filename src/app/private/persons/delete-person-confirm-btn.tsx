'use client'

import React from 'react'
import { deletePerson } from './actions'
import { AlertDialogAction } from '@/components/ui/alert-dialog'

interface DeletePersonConfirmBtnProps {
    personId: string
}

export default function DeletePersonConfirmBtn({personId}: DeletePersonConfirmBtnProps) {
    return <AlertDialogAction onClick={() => deletePerson(personId)}>Confirmar</AlertDialogAction>
}