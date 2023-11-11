import { ListItem } from '@mui/material'

import ExitIcon from '@/assets/img/Exit.svg'
import LogoImg from '@/assets/img/Logo.svg'
import Favorite from '@/components/svg/Favorite'
import Search from '@/components/svg/Search'
import Recommendation from '@/components/svg/Recommendation'
import { SECTIONS } from '@/constants'
import { useAppDispatch, useTypeSelector, useAuth } from '@/hooks'
import { setIsOpenAuthModal, setIsOpenConfirmExit, setIsOpenDrawer, setSelectedSection } from '@/store/reducers'

import { AsideButtonFavorites, AsideButtonRecommendation, AsideButtonSearch, AsideWrapper, AvatarAside, Column, Exit, ListSections, Logo } from "./styled"

export default function Aside() {
    const dispatch = useAppDispatch()
    const { Drawer: { selectedSection } } = useTypeSelector(state => state);
    const { isAuth } = useAuth()

    const handleClickSectionItem = (name: string) => {
        if (name === SECTIONS.FAVORITE && !isAuth) {
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
                    <ListItem data-testid='button-search-section' disablePadding onClick={handleClickSectionItem.bind(null, SECTIONS.SEARCH)}>
                        <AsideButtonSearch isActive={selectedSection === SECTIONS.SEARCH}>
                            <Search />
                        </AsideButtonSearch>
                    </ListItem>
                    <ListItem data-testid='button-favorite-section' disablePadding onClick={handleClickSectionItem.bind(null, SECTIONS.FAVORITE)}>
                        <AsideButtonFavorites isActive={selectedSection === SECTIONS.FAVORITE}>
                            <Favorite />
                        </AsideButtonFavorites>
                    </ListItem>
                    <ListItem data-testid='button-favorite-section' disablePadding onClick={handleClickSectionItem.bind(null, SECTIONS.RECOMMENDATION)}>
                        <AsideButtonRecommendation isActive={selectedSection === SECTIONS.RECOMMENDATION}>
                            <Recommendation />
                        </AsideButtonRecommendation>
                    </ListItem>
                </ListSections>
                {isAuth ? (
                    <Exit onClick={handleClickExit}>
                        <img src={ExitIcon} alt="ExitIcon" />
                    </Exit>
                ) : (
                    <AvatarAside onClick={handleClickAvatar} src='/emptyAvatar.png' alt='Avatar' />
                )}
            </Column>
        </AsideWrapper>
    )
}