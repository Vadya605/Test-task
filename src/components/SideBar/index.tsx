import Box from '@mui/material/Box';
import LogoImg from '../../assets/img/Logo.svg'
import Favorite from '../svg/Favorite';
import Search from '../svg/Search'
import {
  Drawer, DrawerContent, DrawerWrapper, ListSections,
  Aside, AsideButtonFavorites,
  AsideButtonSearch, AvatarAside, Logo
} from './styled';
import FavoritesPanel from '../FavoritesPanel';
import SearchPanel from '../SearchPanel';
import { ListItem } from '@mui/material';
import AutoCompleteSearch from '../AutoCompleteSearch';
import { useAppDispatch, useTypeSelector } from '../../hooks/redux';
import { DrawerServices } from '../../store/reducers';

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