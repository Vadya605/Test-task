import { Close } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";

import { useAppDispatch, useTypeSelector } from "@/hooks/redux";
import { setIsOpenAuthModal } from "@/store/reducers";

import FormLogin from "../FormLogin";
import FormSignup from "../FormSignup";
import { DialogAuth, DialogContent, DialogHeader } from "./styled";

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
                    { selectedForm === 'login'? 'Авторизация': 'Регистрация' }
                </Typography>
                <IconButton onClick={handleClickClose}>
                    <Close />
                </IconButton>
            </DialogHeader>
            <DialogContent>
                {selectedForm === 'login' ? (
                    <FormLogin />
                ) : (
                    <FormSignup />
                )}
            </DialogContent>
        </DialogAuth>
    )
}