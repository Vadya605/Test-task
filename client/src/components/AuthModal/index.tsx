import { Close } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'

import { useAppDispatch, useTypeSelector } from '@/hooks/redux'
import { setIsOpenAuthModal } from '@/store/reducers'

import { DialogAuth, DialogContent, DialogHeader } from './styled'
import { AUTH_MODAL_TITLES } from '@/constants/authModalTitles'
import AuthModalContent from '../AuthModalContent'

export default function AuthModal() {
    const dispatch = useAppDispatch()
    const {
        AuthModal: { isOpen, selectedForm },
    } = useTypeSelector((state) => state)

    const handleClickClose = () => {
        dispatch(setIsOpenAuthModal(false))
    }

    return (
        <DialogAuth open={isOpen} onClose={handleClickClose}>
            <DialogHeader>
                <Typography variant="h1">{AUTH_MODAL_TITLES[selectedForm]}</Typography>
                <IconButton onClick={handleClickClose}>
                    <Close />
                </IconButton>
            </DialogHeader>
            <DialogContent>
                <AuthModalContent />
            </DialogContent>
        </DialogAuth>
    )
}
