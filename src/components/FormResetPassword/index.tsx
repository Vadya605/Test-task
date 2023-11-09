import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { ButtonAuth, FormAuth, SupportAction } from "@/UI";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { ERRORS } from "@/constants";
import { SUCCESS } from "@/constants/success";
import { useAppDispatch } from "@/hooks";
import { setSelectedForm } from "@/store/reducers";

export default function FormResetPassword() {
    const dispatch = useAppDispatch()

    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        try {
            const auth = getAuth()
            await sendPasswordResetEmail(auth, email, { url: process.env.REACT_APP_BASE_URL || '' })
            toast(SUCCESS['email-sent'], { type: 'success' })
        } catch {
            toast(ERRORS['error-sending-mail'], { type: 'error' })
        } finally {
            setLoading(false)
        }
    }

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleClickComeBack = () => {
        dispatch(setSelectedForm('login'))
    }

    return (
        <FormAuth onSubmit={handleSubmit}>
            <TextField onChange={handleChangeEmail} required name='email' label="Email" type="email" fullWidth variant="standard" />
            <ButtonAuth loading={loading} type="submit" variant='contained'>Сбросить</ButtonAuth>
            <SupportAction>
                <Typography variant='caption'>Вспомнили?</Typography>
                <Button onClick={handleClickComeBack}>Вернуться</Button>
            </SupportAction>
        </FormAuth>
    )
}