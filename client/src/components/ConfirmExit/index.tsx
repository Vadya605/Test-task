import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

import { useAppDispatch, useTypeSelector } from '@/hooks/redux'
import { removeUser, setIsOpenConfirmExit, setIsOpenDrawer, setSelectedSection } from '@/store/reducers'

export default function ConfirmExit() {
    const dispatch = useAppDispatch()
    const {
        ConfirmExit: { isOpen },
    } = useTypeSelector((state) => state)

    const handleClose = () => {
        dispatch(setIsOpenConfirmExit(false))
    }

    const handleConfirmExit = () => {
        dispatch(removeUser())
        dispatch(setIsOpenDrawer(false))
        dispatch(setSelectedSection(''))

        handleClose()
    }

    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <DialogTitle>Подтверждение выхода</DialogTitle>
            <DialogContent>
                <DialogContentText>Вы уверены, что хотите выйти из аккаунта?</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Отмена</Button>
                <Button onClick={handleConfirmExit}>Выйти</Button>
            </DialogActions>
        </Dialog>
    )
}
