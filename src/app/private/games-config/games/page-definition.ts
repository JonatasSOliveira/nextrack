import { PageDefinition } from '@/components/navigation-drawer/screen-routes'
import { PRIVATE_ROUTE_INITIAL_PATH } from '@/constants/route'

export const gamesPageDefinition: PageDefinition = {
    label: 'Jogos',
    path: `${PRIVATE_ROUTE_INITIAL_PATH}/games-config/games`,
}
