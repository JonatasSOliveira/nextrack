'use client'

import React from 'react'
import { PersonListResponseDTO } from '@/domain/dtos/person/response/list'
import { GameListResponseDTO } from '@/domain/dtos/game/response/list'
import { CategoryListResponseDTO } from '@/domain/dtos/category/response/list'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PersonGameService } from '@/application/services/person-game'
import { PersonGameFirebaseAdapter } from '@/adapters/firebase/person-game'


interface PersonGameFormComponentProps {
    persons: PersonListResponseDTO[]
    games: GameListResponseDTO[]
    categories: CategoryListResponseDTO[]
}

const personGameFormSchema = z.object({
    person_id: z.string(),
    category_id: z.string(),
    game_id: z.string()
})

type PersonGameFormSchema = z.infer<typeof personGameFormSchema>

const personGameService = new PersonGameService(new PersonGameFirebaseAdapter())

export default function PersonGameFormComponent({ persons, games, categories }: PersonGameFormComponentProps) {
    const {register, handleSubmit} = useForm<PersonGameFormSchema>({
        mode: 'onSubmit',
        resolver: zodResolver(personGameFormSchema),
    })

    const handleCreatePersonGame = async (data: PersonGameFormSchema) => {
        await personGameService.create(data)
    }

    return (
        <form onSubmit={handleSubmit(handleCreatePersonGame)}>
            <label htmlFor="person">Pessoa</label>
            <select id="person" {...register('person_id')}>
                <option value="">Selecione uma pessoa</option>
                {persons.map(person => (
                    <option key={person.id} value={person.id}>{person.name}</option>
                ))}
            </select>
            <label htmlFor="category">Categoria</label>
            <select id="category" {...register('category_id')}>
                <option value="">Selecione uma categoria</option>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
            <label htmlFor="game">Jogo</label>
            <select id="game" {...register('game_id')}>
                <option value="">Selecione um jogo</option>
                {games.map(game => (
                    <option key={game.id} value={game.id}>{game.name}</option>
                ))}
            </select>
            <button type="submit">Submit</button>
        </form>
    )
}
