'use client'

import React, { useEffect, useState, useTransition } from 'react'
import { listCategories as getCategories } from './actions'
import { CategoryListResponseDTO } from '@/domain/dtos/category/response/list';
import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { categoryFormPageDefinition } from './form/page-definition';

export default function CategoriesList() {
    const [isPending, startTransition] = useTransition();
    const [categories, setCategories] = useState<CategoryListResponseDTO[]>([])

    const handleGetCategories = () => startTransition(async () => {
        const persons = await getCategories()
        setCategories(persons)
    })

    useEffect(() => { handleGetCategories() }, [])

    return <div className="flex flex-col gap-2">
        {!isPending && categories.map(category => (
            <Card key={category.id}>
                <CardHeader>
                    <p className="text-sm font-medium leading-none">{category.name}</p>
                </CardHeader>
                <CardFooter className='flex flex-row gap-2 justify-center'>
                    <Link href={`${categoryFormPageDefinition.path}/${category.id}`}
                        className={buttonVariants({ variant: "outline" })}>
                        Editar
                    </Link>
                </CardFooter>
            </Card>
        ))}
    </div>
}