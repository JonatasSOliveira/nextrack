'use client'

import { GameFirebaseAdapter } from '@/adapters/firebase/game'
import { GameService } from '@/application/services/game'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const gameService = new GameService(new GameFirebaseAdapter())

const gameFormSchema = z.object({
    name: z.string()
})

type GameFormSchema = z.infer<typeof gameFormSchema>

export default function GameFormComponent() {
    const { register, handleSubmit } = useForm<GameFormSchema>({
        mode: 'onSubmit',
        resolver: zodResolver(gameFormSchema),
    })

    const handleCreateGame = async (data: GameFormSchema) => {
        await gameService.create(data)
    }

    return (
        <form onSubmit={handleSubmit(handleCreateGame)}>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" {...register('name')} />
            <button type="submit">Submit</button>
        </form>
    )
}
