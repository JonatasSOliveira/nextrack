"use client";

import React, { useEffect, useState, useTransition } from 'react'
import { Card, CardFooter, CardHeader } from '../ui/card';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import DeleteAlert from './delete-alert';


export interface ListComponentProps {
  getDataListAction(): Promise<any[]>
  deleteData(id: string): Promise<void>
  titleItemKey: string
  idItemKey: string
  formUrl: string
}

export default function ListComponent({getDataListAction, titleItemKey, idItemKey, formUrl, deleteData}: ListComponentProps) {
  const [isPending, startTransition] = useTransition()
  const [dataList, setDataList] = useState<any[]>([])

  const handleGetDataList = () => startTransition(async () => {
    const dataList = await getDataListAction()
    setDataList(dataList)
  })

  useEffect(() => { handleGetDataList() }, [])

  return <div className="flex flex-col gap-2">
    {!isPending && dataList.map(data => (
        <Card key={data[idItemKey]}>
            <CardHeader>
                <p className="text-sm font-medium leading-none">{data[titleItemKey]}</p>
            </CardHeader>
            <CardFooter className='flex flex-row gap-2 justify-center'>
                <DeleteAlert data={data} 
                    titleItemKey={titleItemKey} 
                    idItemKey={idItemKey} 
                    handleGetDataList={handleGetDataList}
                    deleteData={deleteData} />
                <Link href={`${formUrl}/${data[idItemKey]}`}
                    className={buttonVariants({ variant: "outline" })}>
                    Editar
                </Link>
            </CardFooter>
        </Card>
    ))}
  </div>
}
