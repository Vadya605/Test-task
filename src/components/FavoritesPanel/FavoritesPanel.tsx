import CardFavorite from "./CardFavorite/CardFavorite";
import FavoritesPanelStyle from "./FavoritesPanelStyle";

const favorites = [
    {
        id: 1, 
        name: 'Фантаcмагарический музей им. П.М. Машерова',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, reprehenderit inventore est accusantium eos ab tenetur vitae, repudiandae doloribus exercitationem assumenda voluptate, temporibus cum corrupti iste eius. Accusamus, dignissimos voluptatibus!'
    },
    {
        id: 2, 
        name: 'Фантаcмагарический музей им. П.М. Машерова',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, reprehenderit inventore est accusantium eos ab tenetur vitae, repudiandae doloribus exercitationem assumenda voluptate, temporibus cum corrupti iste eius. Accusamus, dignissimos voluptatibus!'
    },
    {
        id: 3, 
        name: 'Фантаcмагарический музей им. П.М. Машерова',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, reprehenderit inventore est accusantium eos ab tenetur vitae, repudiandae doloribus exercitationem assumenda voluptate, temporibus cum corrupti iste eius. Accusamus, dignissimos voluptatibus!'
    },
    {
        id: 4, 
        name: 'Фантаcмагарический музей им. П.М. Машерова',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, reprehenderit inventore est accusantium eos ab tenetur vitae, repudiandae doloribus exercitationem assumenda voluptate, temporibus cum corrupti iste eius. Accusamus, dignissimos voluptatibus!'
    },
    {
        id: 5, 
        name: 'Фантаcмагарический музей им. П.М. Машерова',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, reprehenderit inventore est accusantium eos ab tenetur vitae, repudiandae doloribus exercitationem assumenda voluptate, temporibus cum corrupti iste eius. Accusamus, dignissimos voluptatibus!'
    },
    {
        id: 6, 
        name: 'Фантаcмагарический музей им. П.М. Машерова',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, reprehenderit inventore est accusantium eos ab tenetur vitae, repudiandae doloribus exercitationem assumenda voluptate, temporibus cum corrupti iste eius. Accusamus, dignissimos voluptatibus!'
    },
]

export default function FavoritesPanel(){
    const FavoritesStyle = FavoritesPanelStyle()
    return(
        <div className={FavoritesStyle.classes.favoritesPanel}>
            <h3>Избранное</h3>
            { favorites.map(favoriteItem => 
                <CardFavorite favoriteItem={favoriteItem} key={favoriteItem.name} />
            )}
        </div>
    )
}