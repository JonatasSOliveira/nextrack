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
import DeletePersonConfirmBtn, { DeletePersonConfirmBtnProps } from './delete-person-confirm-btn'

export default function DeletePersonAlert(props: DeletePersonConfirmBtnProps) {
    const { person } = props;

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
                    <DeletePersonConfirmBtn {...props} />
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )   
}