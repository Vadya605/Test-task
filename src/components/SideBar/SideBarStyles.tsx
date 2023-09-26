import { makeStyles } from 'tss-react/mui';


const SideBarStyles = makeStyles()(() => {
    return {
        test: {
            width: '60px',
            height: '60px',
            borderRadius: '6px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#5E7BC7'
        }
    };
});

export default SideBarStyles