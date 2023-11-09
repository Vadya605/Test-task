import { Close } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";

import FormLogin from "@/components/FormLogin";
import FormSignup from "@/components/FormSignup";
import { useAppDispatch, useTypeSelector } from "@/hooks/redux";
import { setIsOpenAuthModal } from "@/store/reducers";

import { DialogAuth, DialogContent, DialogHeader } from "./styled";
import FormResetPassword from "../FormResetPassword";

export default function AuthModal() {
    const dispatch = useAppDispatch()
    const { AuthModal: { isOpen, selectedForm } } = useTypeSelector(state => state);

    const handleClickClose = () => {
        dispatch(setIsOpenAuthModal(false))
    }

    return (
        <DialogAuth open={isOpen} onClose={handleClickClose}>
            <DialogHeader>
                <Typography variant='h1'>
                    {selectedForm === 'login' ? 'Авторизация' : selectedForm === 'signup' ? 'Регистрация' : 'Восстановление пароля'}
                </Typography>
                <IconButton onClick={handleClickClose}>
                    <Close />
                </IconButton>
            </DialogHeader>
            <DialogContent>
                {selectedForm === 'login' ? (
                    <FormLogin />
                ) : selectedForm === 'signup' ? (
                    <FormSignup />
                ) : (
                    <FormResetPassword />
                )}
            </DialogContent>
        </DialogAuth>
    )
}