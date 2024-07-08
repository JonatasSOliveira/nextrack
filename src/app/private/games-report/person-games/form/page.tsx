import React from 'react'
import PersonGameFormComponent from './form'
import { PersonService } from '@/application/services/person'
import { PersonFirebaseAdapter } from '@/adapters/firebase/person'
import { GameService } from '@/application/services/game'
import { GameFirebaseAdapter } from '@/adapters/firebase/game'
import { CategoryService } from '@/application/services/category'
import { CategoryFirebaseAdapter } from '@/adapters/firebase/category'
import { getSession } from '@/lib/auth'

const personService = new PersonService(new PersonFirebaseAdapter())
const gameService = new GameService(new GameFirebaseAdapter())
const categoryService = new CategoryService(new CategoryFirebaseAdapter())

export default async function PersonGameFormPage() {
    const session = await getSession()
    if (!session) return null

    const [persons, games, categories] = await Promise.all(
        [personService.list(session.id), gameService.list(session.id), categoryService.list(session.id)]
    )

    return (
        <div>
            <h1>PersonGameFormPage</h1>
            <PersonGameFormComponent persons={persons} games={games} categories={categories} />
        </div>
    )
}
