import FormLogin from '../FormLogin'
import FormSignup from '../FormSignup'
import FormResetPassword from '../FormResetPassword'
import { useTypeSelector } from '@/hooks'

export default function AuthModalContent() {
    const {
        AuthModal: { selectedForm },
    } = useTypeSelector((state) => state)
    switch (selectedForm) {
        case 'login':
            return <FormLogin />
        case 'signup':
            return <FormSignup />
        case 'forgot':
            return <FormResetPassword />
        default:
            return null
    }
}
