import CollapsedCard from '../CardFavoriteCollapsed'
import { useTypeSelector } from '@/hooks'

export default function ListCollapsedCard() {
    const {
        Favorites: { favorites },
    } = useTypeSelector((state) => state)

    return favorites.map((favoriteItem) => <CollapsedCard favoriteItem={favoriteItem} key={favoriteItem.place_id} />)
}
