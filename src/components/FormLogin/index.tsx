import { useState } from "react";

import { Button, IconButton, TextField, Typography } from "@mui/material";
import { Google } from '@mui/icons-material';

import { ERRORS, ErrorsType } from "@/constants/errors";
import { useAppDispatch } from "@/hooks/redux";
import { setIsOpenAuthModal, setSelectedForm, setUser } from "@/store/reducers";
import { ButtonAuth, ErrorMessage, FormAuth, SupportAction } from "@/UI";

import { FirebaseError } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";

export default function FormLogin() {
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const auth = getAuth()

    const handleClickSupport = () => {
        dispatch(setSelectedForm('signup'))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        const form = e.target as HTMLFormElement;
        const [email, password] = [form.email.value, form.password.value]

        try {
            const user = (await signInWithEmailAndPassword(auth, email, password)).user

            dispatch(setUser({
                id: user.uid,
                email: user.email || '',
                token: user.refreshToken // access здесь почему-то нету
            }))
            dispatch(setIsOpenAuthModal(false))
        } catch (error) {
            if (error instanceof FirebaseError) {
                const code = error.code as keyof ErrorsType
                setError(ERRORS[code])
            }
        } finally {
            setLoading(false)
        }
    }

    const handleClickForgotPassword = () => {
        dispatch(setSelectedForm('forgot'))
    }

    const handleClickGoogleAuth = async () => {
        const provider = new GoogleAuthProvider()

        try {
            const result = await signInWithPopup(auth, provider)
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;

            dispatch(setUser({
                id: user.uid,
                email: user.email || '',
                token: token || ''
            }))
            dispatch(setIsOpenAuthModal(false))
        } catch (error) {
            if(error instanceof Error){
                toast(error.message, { type: 'error' })
            }
        }
    }

    return (
        <FormAuth onSubmit={handleSubmit}>
            <TextField required name='email' label="Email" type="email" fullWidth variant="standard" />
            <TextField required name='password' label="Пароль" type="password" fullWidth variant="standard" />
            {error && <ErrorMessage variant="caption">{error}</ErrorMessage>}
            <ButtonAuth
                type="submit"
                variant="contained"
                loading={loading}
            >
                Войти
            </ButtonAuth>
            <IconButton onClick={handleClickGoogleAuth}>
                <Google />
            </IconButton>
            <SupportAction>
                <Typography variant='caption'>Нет аккаунта?</Typography>
                <Button onClick={handleClickSupport}>Создать</Button>
            </SupportAction>
            <SupportAction>
                <Button onClick={handleClickForgotPassword}>Забыли пароль?</Button>
            </SupportAction>
        </FormAuth>
    )
}