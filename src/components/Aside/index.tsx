import { ListItem } from '@mui/material'
import LogoImg from '@/assets/img/Logo.svg'
import Search from '../svg/Search'
import Favorite from '../svg/Favorite'
import { AsideWrapper, Logo, Column, ListSections, AsideButtonSearch, AsideButtonFavorites, AvatarAside } from "./styled"
import { useAppDispatch, useTypeSelector } from '@/hooks/redux'
import { DrawerServices } from '@/store/reducers'

export default function Aside() {

    const dispatch = useAppDispatch()
    const { selectedSection } = useTypeSelector(state => state.Drawer)

    const handleClickSectionItem = (name: string) => {
        dispatch(DrawerServices.actions.setOpen(true))
        dispatch(DrawerServices.actions.setSelectedSection(name))
    }

    return (
        <AsideWrapper className='aside'>
            <Logo>
                <img src={LogoImg} alt="Logo" />
            </Logo>
            <Column>
                <ListSections>
                    <ListItem disablePadding onClick={() => handleClickSectionItem('search')}>
                        <AsideButtonSearch isActive={selectedSection === 'search'}>
                            <Search />
                        </AsideButtonSearch>
                    </ListItem>
                    <ListItem disablePadding onClick={() => handleClickSectionItem('favorite')}>
                        <AsideButtonFavorites isActive={selectedSection === 'favorite'}>
                            <Favorite />
                        </AsideButtonFavorites>
                    </ListItem>
                </ListSections>
                <AvatarAside src='/Person.jpg' alt='Avatar' />
            </Column>
        </AsideWrapper>
    )
}