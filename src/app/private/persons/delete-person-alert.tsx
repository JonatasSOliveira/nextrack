import React from 'react'
import { Button } from '@/components/ui/button'
import { 
    AlertDialog,
    AlertDialogCancel, 
    AlertDialogContent, 
    AlertDialogDescription, 
    AlertDialogFooter, 
    AlertDialogHeader, 
    AlertDialogTitle, 
    AlertDialogTrigger
 } from '@/components/ui/alert-dialog'
import { PersonListResponseDTO } from '@/domain/dtos/person/response/list'
import DeletePersonConfirmBtn from './delete-person-confirm-btn'

interface DeletePersonButton {
    person: PersonListResponseDTO
}

export default function DeletePersonAlert({ person }: DeletePersonButton) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="secondary">Excluir</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Você tem certeza que deseja excluir {person.name}?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Essa ação não pode ser desfeita. Isso irá excluir {person.name} permanentemente
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <DeletePersonConfirmBtn personId={person.id} />
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )   
}