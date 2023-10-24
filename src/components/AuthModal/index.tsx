import { useAppDispatch, useTypeSelector } from "@/hooks/redux";
import { AuthModalServices } from "@/store/reducers";
import { Close } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import FormLogin from "../FormLogin";
import FormSignup from "../FormSignup";
import { DialogAuth, DialogContent, DialogHeader } from "./styled";

export default function AuthModal() {
    const dispatch = useAppDispatch()
    const { isOpen, selectedForm } = useTypeSelector(state => state.AuthModal)

    const handleClickClose = () => {
        dispatch(AuthModalServices.actions.setIsOpen(false))
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