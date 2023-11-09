import { useState } from "react";

import { Button, TextField, Typography } from "@mui/material";

import { ERRORS, ErrorsType } from "@/constants/errors";
import { useAppDispatch } from "@/hooks/redux";
import { setIsOpenAuthModal, setSelectedForm, setUser } from "@/store/reducers";
import { ButtonAuth, ErrorMessage, FormAuth, SupportAction } from "@/UI";

import { FirebaseError } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
                token: user.refreshToken
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

    return (
        <FormAuth onSubmit={handleSubmit}>
            <TextField required name='email' label="Email" type="email" fullWidth variant="standard" />
            <TextField required name='password' label="Пароль" type="password" fullWidth variant="standard" />
            { error && <ErrorMessage variant="caption">{ error }</ErrorMessage>}
            <ButtonAuth
                type="submit"
                variant="contained"
                loading={loading}
            >
                Войти
            </ButtonAuth>
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