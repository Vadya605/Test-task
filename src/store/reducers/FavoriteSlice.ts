import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFavorite } from '../../models/IFavorite'

interface FavoriteState {
    favorites: IFavorite[]
}

const initialState: FavoriteState = {
    favorites: [
        {
            id: 1,
            name: 'Фантаcмагарический музей им. П.М. Машерова',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, reprehenderit inventore est accusantium eos ab tenetur vitae, repudiandae doloribus exercitationem assumenda voluptate, temporibus cum corrupti iste eius.Accusamus, dignissimos voluptatibus!',
            types: ['культура'],
            photo: '/ExamplePhoto.png'
        },
        {
            id: 2, 
            name: 'Городской парк',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, reprehenderit inventore est accusantium eos ab tenetur vitae, repudiandae doloribus exercitationem assumenda voluptate, temporibus cum corrupti iste eius. Accusamus, dignissimos voluptatibus!',
            types: ['культура'],
            photo: '/ExamplePhoto.png'
        },
        {
            id: 3, 
            name: 'Фантаcмагарический музей им. П.М. Машерова',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, reprehenderit inventore est accusantium eos ab tenetur vitae, repudiandae doloribus exercitationem assumenda voluptate, temporibus cum corrupti iste eius. Accusamus, dignissimos voluptatibus!',
            types: ['культура'],
            photo: '/ExamplePhoto.png'
        },
        {
            id: 4, 
            name: 'Фантаcмагарический музей им. П.М. Машерова',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, reprehenderit inventore est accusantium eos ab tenetur vitae, repudiandae doloribus exercitationem assumenda voluptate, temporibus cum corrupti iste eius. Accusamus, dignissimos voluptatibus!',
            types: ['культура'],
            photo: '/ExamplePhoto.png'
        },
        {
            id: 5, 
            name: 'Фантаcмагарический музей им. П.М. Машерова',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, reprehenderit inventore est accusantium eos ab tenetur vitae, repudiandae doloribus exercitationem assumenda voluptate, temporibus cum corrupti iste eius. Accusamus, dignissimos voluptatibus!',
            types: ['культура'],
            photo: '/ExamplePhoto.png'
        },
        {
            id: 6, 
            name: 'Фантаcмагарический музей им. П.М. Машерова',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, reprehenderit inventore est accusantium eos ab tenetur vitae, repudiandae doloribus exercitationem assumenda voluptate, temporibus cum corrupti iste eius. Accusamus, dignissimos voluptatibus!',
            types: ['культура'],
            photo: '/ExamplePhoto.png'
        },
        {
            id: 7, 
            name: 'Фантаcмагарический музей им. П.М. Машерова',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, reprehenderit inventore est accusantium eos ab tenetur vitae, repudiandae doloribus exercitationem assumenda voluptate, temporibus cum corrupti iste eius. Accusamus, dignissimos voluptatibus!',
            types: ['культура'],
            photo: '/ExamplePhoto.png'
        },
        {
            id: 8, 
            name: 'Фантаcмагарический музей им. П.М. Машерова',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, reprehenderit inventore est accusantium eos ab tenetur vitae, repudiandae doloribus exercitationem assumenda voluptate, temporibus cum corrupti iste eius. Accusamus, dignissimos voluptatibus!',
            types: ['культура'],
            photo: '/ExamplePhoto.png'
        },
        {
            id: 9, 
            name: 'Фантаcмагарический музей им. П.М. Машерова',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, reprehenderit inventore est accusantium eos ab tenetur vitae, repudiandae doloribus exercitationem assumenda voluptate, temporibus cum corrupti iste eius. Accusamus, dignissimos voluptatibus!',
            types: ['культура'],
            photo: '/ExamplePhoto.png'
        },
    ]
}

export const FavoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorite(state, action: PayloadAction<IFavorite>) {
            state.favorites.push(action.payload)
        },
        removeFavorite(state, action: PayloadAction<IFavorite>) {
            state.favorites = state.favorites.filter(item => item.id !== action.payload.id)
        }
    },
})

export const FavoriteServices = {
    actions: FavoriteSlice.actions
}

export default FavoriteSlice.reducer;