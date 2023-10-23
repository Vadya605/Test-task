import Button from '@mui/material/Button';
import { IconButton, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DialogHeader } from '@/UI/Auth/DialogHeader';
import { ButtonAuth } from '@/UI/Auth/ButtonAuth';
import { SupportAction } from '@/UI/Auth/SupportAction';
import { DialogActions } from '@/UI/Auth/DialogActions';
import { DialogContent } from '@/UI/Auth/DialogContent';
import { DialogAuth } from '@/UI/Auth/DialogAuth';
import { useAppDispatch, useTypeSelector } from '@/hooks/redux';
import { RegisrtationServices } from '@/store/reducers';

export default function Registration() {
    const dispatch = useAppDispatch()
    const { isOpen, isLoading, userData } = useTypeSelector(state => state.Registration)

    const handleClose = () => {
        dispatch(RegisrtationServices.actions.setIsOpen(false))
    };

    const handleClickAuth = () => {
        dispatch(RegisrtationServices.actions.setIsLoading(true))
    }

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(RegisrtationServices.actions.setUserData({
            ...userData,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <DialogAuth className='modal' open={isOpen} onClose={handleClose}>
            <DialogHeader>
                <Typography variant='h1'>Регистрация</Typography>
                <IconButton onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </DialogHeader>
            <DialogContent>
                <TextField onChange={handleChangeInput} name='name' label="Логин" type="text" fullWidth variant="standard" />
                <TextField onChange={handleChangeInput} name='email' label="Email" type="email" fullWidth variant="standard" />
                <TextField onChange={handleChangeInput} name='password' label="Пароль" type="password" fullWidth variant="standard" />
                <TextField onChange={handleChangeInput} name='password-confirm' label="Повторите пароль" type="password" fullWidth variant="standard" />
            </DialogContent>
            <DialogActions>
                <ButtonAuth
                    variant='contained'
                    loading={isLoading}
                    onClick={handleClickAuth}
                >
                    Зарегистрироваться
                </ButtonAuth>
                <SupportAction>
                    <Typography variant='caption'>Есть аккаунт?</Typography>
                    <Button>Войти</Button>
                </SupportAction>
            </DialogActions>
        </DialogAuth>
    );
}