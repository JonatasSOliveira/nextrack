import { PageDefinition } from '@/components/navigation-drawer/screen-routes'
import { PRIVATE_ROUTE_INITIAL_PATH } from '@/constants/route'

export const personGamesPageDefinition: PageDefinition = {
    title: 'Jogos por pessoa',
    path: `${PRIVATE_ROUTE_INITIAL_PATH}/games-report/person-games`,
}
