import { ListItem } from '@mui/material'
import LogoImg from '@/assets/img/Logo.svg'
import Search from '../svg/Search'
import Favorite from '../svg/Favorite'
import { AsideWrapper, Logo, Column, ListSections, AsideButtonSearch, AsideButtonFavorites, AvatarAside, Exit } from "./styled"
import { useAppDispatch, useTypeSelector } from '@/hooks/redux'
import { AuthModalServices, ConfirmExitServices, DrawerServices } from '@/store/reducers'
import { useAuth } from '@/hooks/useAuth'
import ExitIcon from '@/assets/img/Exit.svg'

export default function Aside() {

    const dispatch = useAppDispatch()
    const { selectedSection } = useTypeSelector(state => state.Drawer)
    const { isAuth } = useAuth()

    const handleClickSectionItem = (name: string) => {
        if(name === 'favorite' && !isAuth){
            return dispatch(AuthModalServices.actions.setIsOpen(true))
        }

        dispatch(DrawerServices.actions.setOpen(true))
        dispatch(DrawerServices.actions.setSelectedSection(name))
    }

    const handleClickAvatar = () => {
        return dispatch(AuthModalServices.actions.setIsOpen(true))
    }

    const handleClickExit = () => {
        dispatch(ConfirmExitServices.actions.setIsOpen(true))
    }

    return (
        <AsideWrapper className='aside'>
            <Logo>
                <img src={LogoImg} alt="Logo" />
            </Logo>
            <Column>
                <ListSections>
                    <ListItem data-testid='button-search-section' disablePadding onClick={() => handleClickSectionItem('search')}>
                        <AsideButtonSearch isActive={selectedSection === 'search'}>
                            <Search />
                        </AsideButtonSearch>
                    </ListItem>
                    <ListItem data-testid='button-favorite-section' disablePadding onClick={() => handleClickSectionItem('favorite')}>
                        <AsideButtonFavorites isActive={selectedSection === 'favorite'}>
                            <Favorite />
                        </AsideButtonFavorites>
                    </ListItem>
                </ListSections>
                { isAuth? (
                    <Exit onClick={handleClickExit}>
                        <img src={ExitIcon} alt="ExitIcon" />
                    </Exit>
                ): (
                    <AvatarAside onClick={handleClickAvatar} src='/emptyAvatar.png' alt='Avatar' />
                ) }
            </Column>
        </AsideWrapper>
    )
}