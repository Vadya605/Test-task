import { useState } from "react";

import { GitHub,Google } from '@mui/icons-material';
import { Button, IconButton, TextField, Typography } from "@mui/material";

import { ERRORS } from "@/constants";
import { useAppDispatch } from "@/hooks/redux";
import { setIsOpenAuthModal, setPersonalData, setSelectedForm } from "@/store/reducers";
import { ButtonAuth, ErrorMessage, FormAuth, SupportAction } from "@/UI";
import { authWithProvider } from "@/utils";

import { AuthProviders } from "./styled";
import { FirebaseError } from "firebase/app";
import { AuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { ErrorsType } from "@/types";

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

            dispatch(setPersonalData({
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

    const handleAuthWithProvider = async (provider: AuthProvider) => {
        try {
            const user = await authWithProvider(auth, provider)
            dispatch(setPersonalData(user))
            dispatch(setIsOpenAuthModal(false))
        } catch (error) {
            if (error instanceof FirebaseError) {
                const code = error.code as keyof ErrorsType
                setError(ERRORS[code])
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
            <AuthProviders>
                <IconButton onClick={handleAuthWithProvider.bind(null, new GoogleAuthProvider())}>
                    <Google />
                </IconButton>
                <IconButton onClick={handleAuthWithProvider.bind(null, new GithubAuthProvider())}>
                    <GitHub />
                </IconButton>
            </AuthProviders>
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