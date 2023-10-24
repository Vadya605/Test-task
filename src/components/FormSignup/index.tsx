import { useState } from "react";

import { Button,TextField, Typography } from "@mui/material";

import { ERRORS, ErrorsType } from "@/constants/errors";
import { AuthError } from "@/errors/AuthError";
import { useAppDispatch } from "@/hooks/redux";
import { AuthModalServices, UserServices } from "@/store/reducers";
import { ButtonAuth } from "@/UI/ButtonAuth";
import { ErrorMessage } from "@/UI/ErrorMessage";
import { FormAuth } from "@/UI/FormAuth";
import { SupportAction } from "@/UI/SupportAction";

import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword,getAuth } from "firebase/auth";


export default function FormSignup() {
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        const form = e.target as HTMLFormElement;
        const [email, password, passwordConfirm] = [form.email.value, form.password.value, form.passwordConfirm.value]

        try {
            if (password !== passwordConfirm) {
                throw new AuthError(ERRORS["password-mismatch"])
            }

            const auth = getAuth()
            const user = (await createUserWithEmailAndPassword(auth, email, password)).user

            dispatch(UserServices.actions.setUser({
                id: user.uid,
                email: user.email || '',
                token: user.refreshToken
            }))
            dispatch(AuthModalServices.actions.setIsOpen(false))
        } catch (error) {
            if(error instanceof FirebaseError){
                const code = error.code as keyof ErrorsType
                setError(ERRORS[code])
            } else if(error instanceof AuthError){
                console.log('auth error')
                setError(error.message)
            }
        } finally {
            setLoading(false)
        }
    }

    const handleClickSupport = () => {
        dispatch(AuthModalServices.actions.setSelectedForm('login'))
    }

    return (
        <FormAuth onSubmit={handleSubmit}>
            <TextField required name='email' label="Email" type="email" fullWidth variant="standard" />
            <TextField required name='password' label="Пароль" type="password" fullWidth variant="standard" />
            <TextField required name='passwordConfirm' label="Повторите пароль" type="password" fullWidth variant="standard" />
            { error && <ErrorMessage variant="caption">{ error }</ErrorMessage> }
            <ButtonAuth
                type="submit"
                variant="contained"
                loading={loading}
            >
                Зарегистрироваться
            </ButtonAuth>
            <SupportAction>
                <Typography variant='caption'>Уже есть аккаунт?</Typography>
                <Button onClick={handleClickSupport}>Войти</Button>
            </SupportAction>
        </FormAuth>
    )
}