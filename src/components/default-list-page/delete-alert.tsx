import React from 'react'
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
import { Button } from '../ui/button'
import DeleteButton, { DeleteButtonProps } from './delete-button'

interface DeleteAlertProps extends DeleteButtonProps {
  titleItemKey: string
    
}

export default function DeleteAlert({data, titleItemKey,...props}: DeleteAlertProps) {
  return <AlertDialog>
  <AlertDialogTrigger asChild>
      <Button variant="secondary">Excluir</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
      <AlertDialogHeader>
          <AlertDialogTitle>Você tem certeza que deseja excluir {data[titleItemKey]}?</AlertDialogTitle>
          <AlertDialogDescription>
              Essa ação não pode ser desfeita. Isso irá excluir {data[titleItemKey]} permanentemente
          </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <DeleteButton {...props} data={data} />
      </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
}
