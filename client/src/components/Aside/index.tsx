import { ListItem } from '@mui/material'

import ExitIcon from '@/assets/img/Exit.svg'
import LogoImg from '@/assets/img/Logo.svg'
import EmptyAvatar from '/public/emptyAvatar.png'
import Favorite from '@/components/svg/Favorite'
import Recommendation from '@/components/svg/Recommendation'
import Search from '@/components/svg/Search'
import { SECTIONS_SIDEBAR } from '@/constants'
import { useAppDispatch, useAuth,useTypeSelector } from '@/hooks'
import { setIsOpenAuthModal, setIsOpenConfirmExit, setIsOpenDrawer, setSelectedSection } from '@/store/reducers'

import { AsideButtonFavorites, AsideButtonRecommendation, AsideButtonSearch, AsideWrapper, AvatarAside, Column, Exit, ListSections, Logo } from "./styled"

export default function Aside() {
    const dispatch = useAppDispatch()
    const { Drawer: { selectedSection } } = useTypeSelector(state => state);
    const { isAuth } = useAuth()

    const handleClickSectionItem = (name: string) => {
        if (name === SECTIONS_SIDEBAR.FAVORITE && !isAuth) {
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
        <AsideWrapper>
            <Logo>
                <img src={LogoImg} alt="Logo" />
            </Logo>
            <Column>
                <ListSections>
                    <ListItem 
                        data-testid='button-search-section' 
                        onClick={handleClickSectionItem.bind(null, SECTIONS_SIDEBAR.SEARCH)}
                        disablePadding 
                    >
                        <AsideButtonSearch isActive={selectedSection === SECTIONS_SIDEBAR.SEARCH}>
                            <Search />
                        </AsideButtonSearch>
                    </ListItem>
                    <ListItem 
                        data-testid='button-favorite-section' 
                        onClick={handleClickSectionItem.bind(null, SECTIONS_SIDEBAR.FAVORITE)}
                        disablePadding 
                    >
                        <AsideButtonFavorites isActive={selectedSection === SECTIONS_SIDEBAR.FAVORITE}>
                            <Favorite />
                        </AsideButtonFavorites>
                    </ListItem>
                    <ListItem 
                        data-testid='button-recommendation-section' 
                        onClick={handleClickSectionItem.bind(null, SECTIONS_SIDEBAR.RECOMMENDATION)}
                        disablePadding 
                    >
                        <AsideButtonRecommendation isActive={selectedSection === SECTIONS_SIDEBAR.RECOMMENDATION}>
                            <Recommendation />
                        </AsideButtonRecommendation>
                    </ListItem>
                </ListSections>
                {isAuth ? (
                    <Exit onClick={handleClickExit}>
                        <img src={ExitIcon} alt="ExitIcon" />
                    </Exit>
                ) : (
                    <AvatarAside onClick={handleClickAvatar} src={EmptyAvatar} alt='Avatar' />
                )}
            </Column>
        </AsideWrapper>
    )
}