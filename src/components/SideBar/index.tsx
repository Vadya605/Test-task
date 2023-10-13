import { ListItem } from '@mui/material';

import LogoImg from '@/assets/img/Logo.svg'
import AutoCompleteSearch from '@/components/AutoCompleteSearch';
import FavoritesPanel from '@/components/FavoritesPanel';
import SearchPanel from '@/components/SearchPanel';
import Favorite from '@/components/svg/Favorite';
import Search from '@/components/svg/Search'
import { useAppDispatch, useTypeSelector } from '@/hooks/redux';
import { DrawerServices } from '@/store/reducers';

import {
  Aside, AsideButtonFavorites,
  AsideButtonSearch, AvatarAside, Column, Drawer, DrawerContent, DrawerWrapper, ListSections,
  Logo,
} from './styled';

export default function SideBar() {
  const dispatch = useAppDispatch()
  const { isOpen, selectedSection } = useTypeSelector(state => state.Drawer)

  const handleClickSectionItem = (name: string) => {
    dispatch(DrawerServices.actions.setOpen(true))
    dispatch(DrawerServices.actions.setSelectedSection(name))
  }

  return (
      <Drawer variant="permanent" open={isOpen} className='drawer'>
        <DrawerWrapper className='drawerWrapper'>
          <Aside className='aside'>
            <Logo onClick={() => dispatch(DrawerServices.actions.setOpen(!isOpen))}>
              <img src={LogoImg} alt="Logo" />
            </Logo>
            <Column>
              <ListSections>
                <ListItem disablePadding onClick={() => handleClickSectionItem('search')}>
                  <AsideButtonSearch>
                    <Search />
                  </AsideButtonSearch>
                </ListItem>
                <ListItem disablePadding onClick={() => handleClickSectionItem('favorite')}>
                  <AsideButtonFavorites>
                    <Favorite />
                  </AsideButtonFavorites>
                </ListItem>
              </ListSections>
              <AvatarAside src='/Person.jpg' alt='Avatar' />
            </Column>
          </Aside>
          <DrawerContent className='drawerContent'>
            <AutoCompleteSearch />
            {isOpen && (selectedSection === 'search' ? <SearchPanel /> : <FavoritesPanel />)}
          </DrawerContent>
        </DrawerWrapper>
      </Drawer>
  );
}