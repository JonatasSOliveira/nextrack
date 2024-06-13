import { PageDefinition } from '@/components/navigation-drawer/screen-routes'
import { PRIVATE_ROUTE_INITIAL_PATH } from '@/constants/route'

export const categoryFormPageDefinition: PageDefinition = {
    label: 'Formulário de categoria',
    path: `${PRIVATE_ROUTE_INITIAL_PATH}/games-config/categories/form`,
}
