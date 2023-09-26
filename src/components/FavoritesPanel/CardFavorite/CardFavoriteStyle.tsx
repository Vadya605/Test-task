import { makeStyles } from 'tss-react/mui';

const CardFavoriteStyle = makeStyles()(() => {
    const borderColor = '#C4C4C4'
    return {
        card: {
            whiteSpace: 'normal',
            borderRadius: '10px',
            border: `3px solid ${borderColor}`,
            boxShadow: 'none',
            padding: '20px 25px',
            marginBottom: '25px'
        },
        cardContent: {
            padding: '0px',
        },
        cardActions: {
            padding: '0px',
        },
        title: {
            fontWeight: '600',
        },
        row: {
            display: 'flex',
            columnGap: '20px',
            alignItems: 'center',
        },
        column: {
            display: 'flex',
            flexDirection: 'column',
            rowGap: '10px',
        },
        photo: {
            borderRadius: '10px',
            width: '100%',
            maxHeight: '300px',
            minHeight: '100px',
            height: 'auto',
            background: "url('/ExamplePhoto.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'end',
            transition: 'height 0.3s ease-in-out',
        },
        markers: {
            padding: '8px',
            display: 'flex',
            columnGap: '5px',
        },
        marker: {
            width: '18px',
        },
        save:{
            border: `3px solid ${borderColor}`,
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            color: '#808080',
            fontSize: '14px',
            padding: '10px 15px'
        },
        route:{
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            color: '#FFF',
            fontSize: '14px',
            padding: '13px 18px',
            backgroundColor: '#5E7BC7'
        }
    };
});

export default CardFavoriteStyle