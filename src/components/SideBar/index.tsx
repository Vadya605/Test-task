import { ListItem } from '@mui/material';
import Box from '@mui/material/Box';

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
  AsideButtonSearch, AvatarAside,   Drawer, DrawerContent, DrawerWrapper, ListSections,
Logo
} from './styled';

export default function SideBar() {
  const dispatch = useAppDispatch()
  const { isOpen, selectedSection } = useTypeSelector(state => state.Drawer)

  const handleClickSectionItem = (name: string) => {
    dispatch(DrawerServices.actions.setOpen(true))
    dispatch(DrawerServices.actions.setSelectedSection(name))
  }

  return (
    <Box>
      <Drawer variant="permanent" open={isOpen} className='drawer'>
        <DrawerWrapper>
          <Aside>
            <Box>
              <Logo onClick={() => dispatch(DrawerServices.actions.setOpen(!isOpen))}>
                <img src={LogoImg} alt="" />
              </Logo>
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
            </Box>
            <AvatarAside src='/Person.jpg' />
          </Aside>
          <DrawerContent>
            <AutoCompleteSearch />
            {isOpen && (selectedSection === 'search' ? <SearchPanel /> : <FavoritesPanel />)}
          </DrawerContent>
        </DrawerWrapper>
      </Drawer>
    </Box>
  );
}