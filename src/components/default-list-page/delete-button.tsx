'use client'
import React from 'react'
import { AlertDialogAction } from '../ui/alert-dialog'

export interface DeleteButtonProps {
    data: any
    idItemKey: string
    handleGetDataList(): void
    deleteData(id: string): Promise<void>
}

export default function DeleteButton({deleteData, data, idItemKey, handleGetDataList}: DeleteButtonProps) {
    const handleDeleteData = async () => {
        await deleteData(data[idItemKey])
        handleGetDataList()
    }

    return <AlertDialogAction onClick={handleDeleteData}>Confirmar</AlertDialogAction>

}
