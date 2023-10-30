import { ListItem } from '@mui/material'

import ExitIcon from '@/assets/img/Exit.svg'
import LogoImg from '@/assets/img/Logo.svg'
import { useAppDispatch, useTypeSelector } from '@/hooks/redux'
import { useAuth } from '@/hooks/useAuth'
import { setIsOpenAuthModal, setIsOpenConfirmExit, setIsOpenDrawer, setSelectedSection } from '@/store/reducers'

import Favorite from '../svg/Favorite'
import Search from '../svg/Search'
import { AsideButtonFavorites, AsideButtonSearch, AsideWrapper, AvatarAside, Column, Exit,ListSections, Logo } from "./styled"

export default function Aside() {
    const dispatch = useAppDispatch()
    const { selectedSection } = useTypeSelector(state => state.Drawer)
    const { isAuth } = useAuth()

    const handleClickSectionItem = (name: string) => {
        if(name === 'favorite' && !isAuth){
            return dispatch(setIsOpenAuthModal(true))
        }

        dispatch(setIsOpenDrawer(true))
        dispatch(setSelectedSection(name))
    }

    const handleClickAvatar = () => {
        return dispatch(setIsOpenAuthModal(true))
    }

    const handleClickExit = () => {
        dispatch(setIsOpenConfirmExit(true))
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