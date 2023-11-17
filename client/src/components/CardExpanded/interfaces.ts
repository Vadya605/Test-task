import { IRecommendation } from '@/interfaces'
import { IFavorite } from '@/interfaces/IFavorite'

export interface ICardProps {
    cardItem: IFavorite | IRecommendation
}
