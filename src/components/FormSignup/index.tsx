import { useState } from "react";

import { Button, IconButton, TextField, Typography} from "@mui/material";
import { Info } from '@mui/icons-material';

import { ERRORS, ErrorsType } from "@/constants";
import { AuthError } from "@/errors";
import { useAppDispatch } from "@/hooks";
import { setIsOpenAuthModal, setSelectedForm, setUser } from "@/store/reducers";
import { ButtonAuth, ErrorMessage, FormAuth, SupportAction } from "@/UI";
import { calculatePasswordStrength, checkPasswordMatch } from "@/utils";

import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Row, PasswordBox, PasswordInput, PasswordStrengthMeter, PasswordTooltip } from "./styled";


export default function FormSignup() {
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [passwordStrength, setPasswordStrength] = useState(0)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        const form = e.target as HTMLFormElement;
        const [email, password, passwordConfirm] = [form.email.value, form.password.value, form.passwordConfirm.value]

        try {
            if (!checkPasswordMatch(password, passwordConfirm)) {
                throw new AuthError(ERRORS["password-mismatch"])
            }

            const auth = getAuth()
            const user = (await createUserWithEmailAndPassword(auth, email, password)).user

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
            } else if (error instanceof AuthError) {
                setError(error.message)
            }
        } finally {
            setLoading(false)
        }
    }

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const passwordStrength = calculatePasswordStrength(e.target.value)
        console.log(passwordStrength)
        setPasswordStrength(passwordStrength)
    }

    const handleClickSupport = () => {
        dispatch(setSelectedForm('login'))
    }

    const passwordCriteria = (
        <div>
            <p>Критерии пароля:</p>
            <ul>
                <li>Длина 6 символов и более</li>
                <li>Хотя бы одна цифра</li>
                <li>Хотя бы одна строчная буква</li>
                <li>Хотя бы одна заглавная буква</li>
            </ul>
        </div>
    );

    return (
        <FormAuth onSubmit={handleSubmit}>
            <TextField required name='email' label="Email" type="email" fullWidth variant="standard" />
            <PasswordBox>
                <Row>
                    <PasswordInput onChange={handleChangePassword} required name='password' label="Пароль" type="password" fullWidth variant="standard" />
                    <PasswordTooltip title={passwordCriteria}>
                        <IconButton>
                            <Info />
                        </IconButton>
                    </PasswordTooltip>
                </Row>
                <PasswordStrengthMeter variant='determinate' value={passwordStrength} />
            </PasswordBox>
            <TextField required name='passwordConfirm' label="Повторите пароль" type="password" fullWidth variant="standard" />
            {error && <ErrorMessage variant="caption">{error}</ErrorMessage>}
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