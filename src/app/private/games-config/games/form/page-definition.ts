import { PageDefinition } from '@/components/navigation-drawer/screen-routes'
import { PRIVATE_ROUTE_INITIAL_PATH } from '@/constants/route'

export const gameFormPageDefinition: PageDefinition = {
    label: 'Formulário de jogo',
    path: `${PRIVATE_ROUTE_INITIAL_PATH}/games-config/games/form`,
}
