import { makeStyles } from 'tss-react/mui';

const ExpandedActionsStyle = makeStyles()(() => {
    return {
        expandedActions:{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between'
        },
        save:{
            border: '3px solid #C4C4C4',
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
    }
})

export default ExpandedActionsStyle