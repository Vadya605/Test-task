import { useState } from "react";

import { Button, TextField, Typography } from "@mui/material";

import { ERRORS, ErrorsType } from "@/constants/errors";
import { useAppDispatch } from "@/hooks/redux";
import { AuthModalServices, UserServices } from "@/store/reducers";
import { ButtonAuth } from "@/UI/ButtonAuth";
import { ErrorMessage } from "@/UI/ErrorMessage";
import { FormAuth } from "@/UI/FormAuth";
import { SupportAction } from "@/UI/SupportAction";

import { FirebaseError } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function FormLogin() {
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleClickSupport = () => {
        dispatch(AuthModalServices.actions.setSelectedForm('signup'))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        const form = e.target as HTMLFormElement;
        const [email, password] = [form.email.value, form.password.value]

        try {
            const auth = getAuth()
            const user = (await signInWithEmailAndPassword(auth, email, password)).user

            dispatch(UserServices.actions.setUser({
                id: user.uid,
                email: user.email || '',
                token: user.refreshToken
            }))
            dispatch(AuthModalServices.actions.setIsOpen(false))
        } catch (error) {
            if (error instanceof FirebaseError) {
                const code = error.code as keyof ErrorsType
                setError(ERRORS[code])
            }
        } finally {
            setLoading(false)
        }
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
        </FormAuth>
    )
}