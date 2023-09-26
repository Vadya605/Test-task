import { makeStyles } from 'tss-react/mui';

const CollapsedActionsStyle = makeStyles()(() => {
    return {
        collapsedActions:{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between'
        }
    }
})

export default CollapsedActionsStyle