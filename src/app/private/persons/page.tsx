import React from 'react'
import { personsPageDefinition } from './page-definition'
import DefaultListPage from '@/components/default-list-page/default-list-page'
import { deletePerson, getPersons } from './actions'

export default function PersonsPage() {
    return <DefaultListPage formUrl='/private/persons/form' 
        getDataListAction={getPersons}
        deleteData={deletePerson}
        idItemKey='id'
        newRegisterLabel='Nova pessoa'
        title={personsPageDefinition.title}
        titleItemKey='name'/>
}
