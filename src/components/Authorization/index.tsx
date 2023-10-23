import Button from '@mui/material/Button';
import { IconButton, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DialogHeader } from '@/UI/Auth/DialogHeader';
import { ButtonAuth } from '@/UI/Auth/ButtonAuth';
import { SupportAction } from '@/UI/Auth/SupportAction';
import { DialogActions } from '@/UI/Auth/DialogActions';
import { DialogAuth } from '@/UI/Auth/DialogAuth';
import { DialogContent } from '@/UI/Auth/DialogContent';
import { useAppDispatch, useTypeSelector } from '@/hooks/redux';
import { AuthorizationServices } from '@/store/reducers';

export default function Authorization() {
    const dispatch = useAppDispatch()
    const { isOpen, isLoading, userData } = useTypeSelector(state => state.Authorization)

    const handleClose = () => {
        dispatch(AuthorizationServices.actions.setIsOpen(false))
    };

    const handleClickAuth = () => {
        dispatch(AuthorizationServices.actions.setIsLoading(true))
    }

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(AuthorizationServices.actions.setUserData({
            ...userData,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <DialogAuth open={isOpen} onClose={handleClose} maxWidth='sm'>
            <DialogHeader>
                <Typography variant='h1'>Авторизация</Typography>
                <IconButton onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </DialogHeader>
            <DialogContent>
                <TextField onChange={handleChangeInput} name='email' label="Email" type="email" fullWidth variant="standard" />
                <TextField onChange={handleChangeInput} name='password' label="Пароль" type="password" fullWidth variant="standard" />
            </DialogContent>
            <DialogActions>
                <ButtonAuth
                    variant='contained'
                    onClick={handleClickAuth}
                    loading={isLoading}
                >
                    Войти
                </ButtonAuth>
                <SupportAction>
                    <Typography variant='caption'>Нет аккаунта?</Typography>
                    <Button>Создать</Button>
                </SupportAction>
            </DialogActions>
        </DialogAuth>
    );
}