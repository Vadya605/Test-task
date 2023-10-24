import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useAppDispatch, useTypeSelector } from '@/hooks/redux';
import { ConfirmExitServices, UserServices } from '@/store/reducers';

export default function ConfirmExit() {
    const dispatch = useAppDispatch()
    const { isOpen } = useTypeSelector(state => state.ConfirmExit)

    const handleClose = () => {
        dispatch(ConfirmExitServices.actions.setIsOpen(false))
    };

    const handleConfirmExit = () => {
        dispatch(UserServices.actions.removeUser())
        handleClose();
    };

    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <DialogTitle>Подтверждение выхода</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Вы уверены, что хотите выйти из аккаунта?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>
                    Отмена
                </Button>
                <Button onClick={handleConfirmExit}>
                    Выйти
                </Button>
            </DialogActions>
        </Dialog>
    );
}

