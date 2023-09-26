import { makeStyles } from 'tss-react/mui';

const FavoritesPanelStyle = makeStyles()(() => {
    return {
        favoritesPanel:{
            display: 'flex',
            flexDirection: 'column',
            alignItems:'flex-start',
        }
    }
})

export default FavoritesPanelStyle