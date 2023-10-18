import { ChevronLeft } from '@mui/icons-material'
import { ListItem } from '@mui/material';

import Arrow from '@/assets/img/Arrow.svg'
import LogoImg from '@/assets/img/Logo.svg'
import AutoCompleteSearch from '@/components/AutoCompleteSearch';
import FavoritesPanel from '@/components/FavoritesPanel';
import SearchPanel from '@/components/SearchPanel';
import Favorite from '@/components/svg/Favorite';
import Search from '@/components/svg/Search'
import { useAppDispatch, useTypeSelector } from '@/hooks/redux';
import { DrawerServices } from '@/store/reducers';

import ErrorBoundary from '../ErrorBoundary';
import FavoritesError from '../FavoritesError';
import {
  ArrowClose,
  ArrowOpen,
  Aside, AsideButtonFavorites,
  AsideButtonSearch, AvatarAside, Column, Container, Drawer, DrawerContent, DrawerWrapper, ListSections,
  Logo,
} from './styled';

export default function SideBar() {
  const dispatch = useAppDispatch()
  const { isOpen, selectedSection } = useTypeSelector(state => state.Drawer)

  const handleClickSectionItem = (name: string) => {
    dispatch(DrawerServices.actions.setOpen(true))
    dispatch(DrawerServices.actions.setSelectedSection(name))
  }

  const handleClickArrow = () => {
    dispatch(DrawerServices.actions.setOpen(!isOpen))
  }
  
  return (
    <Container>
      <Drawer variant="permanent" open={isOpen}>
        <DrawerWrapper className='drawerWrapper'>
          <Aside className='aside'>
            <Logo>
              <img src={LogoImg} alt="Logo" />
            </Logo>
            <Column>
              <ListSections>
                <ListItem disablePadding onClick={() => handleClickSectionItem('search')}>
                  <AsideButtonSearch isActive={ selectedSection === 'search' }>
                    <Search />
                  </AsideButtonSearch>
                </ListItem>
                <ListItem disablePadding onClick={() => handleClickSectionItem('favorite')}>
                  <AsideButtonFavorites isActive={ selectedSection === 'favorite' }>
                    <Favorite />
                  </AsideButtonFavorites>
                </ListItem>
              </ListSections>
              <AvatarAside src='/Person.jpg' alt='Avatar' />
            </Column> 
          </Aside>
          <DrawerContent className='drawerContent'>
            { isOpen && <ArrowClose onClick={handleClickArrow} ><ChevronLeft/></ArrowClose> }
            <AutoCompleteSearch />
            {isOpen && (selectedSection === 'search' ? (
              <SearchPanel />
            ) : (
              <ErrorBoundary fallback={<FavoritesError />}>
                <FavoritesPanel />
              </ErrorBoundary>
            ))}
          </DrawerContent>
        </DrawerWrapper>
      </Drawer>
      {!isOpen &&
      <ArrowOpen onClick={handleClickArrow}>
        <img src={Arrow} alt="" />
      </ArrowOpen>}
    </Container>
  );
}