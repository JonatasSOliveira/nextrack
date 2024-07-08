import { PageDefinition } from '@/components/navigation-drawer/screen-routes'
import { PRIVATE_ROUTE_INITIAL_PATH } from '@/constants/route'

export const personFormPageDefinition: PageDefinition = {
    path: `${PRIVATE_ROUTE_INITIAL_PATH}/persons/form`,
    title: 'Formulário de pessoa'
}