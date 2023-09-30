import { useState } from 'react';
import Box from '@mui/material/Box';
import LogoImg from '../../assets/img/Logo.svg'
import Favorite from '../svg/Favorite';
import Search from '../svg/Search'
import {
  Drawer, DrawerContent, DrawerWrapper, ListSections,
  Aside, AsideButtonFavorites,
  AsideButtonSearch, AvatarAside, Logo
} from './SideBarStyle';
import FavoritesPanel from '../FavoritesPanel/FavoritesPanel';
import SearchPanel from '../SearchPanel/SearchPanel';
import { ListItem } from '@mui/material';
import AutoCompleteSearch from '../AutoCompleteSearch/AutoCompeteSearch';

interface SideBarProps {
  isLoaded: boolean
}

const itemsDrawer = [
  {
    id: 1,
    name: 'search',
    button: <AsideButtonSearch><Search /></AsideButtonSearch>,
  },
  {
    id: 2,
    name: 'favorites',
    button: <AsideButtonFavorites><Favorite /></AsideButtonFavorites>,
  }
]


export default function SideBar({ isLoaded }: SideBarProps) {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('')

  const handleClickSectionItem = (name: string) => {
    setOpen(true)
    setSelectedItem(name)
  }

  return (
    <Box>
      <Drawer variant="permanent" open={open} className='drawer'>
        <DrawerWrapper>
          <Aside>
            <Box>
              <Logo onClick={() => setOpen(!open)}>
                <img src={LogoImg} alt="" />
              </Logo>
              <ListSections>
                {itemsDrawer.map(item => (
                  <ListItem disablePadding key={item.name} onClick={() => handleClickSectionItem(item.name)}>
                      {item.button}
                  </ListItem>
                ))}
              </ListSections>
            </Box>
            <AvatarAside src='/Person.jpg' />
          </Aside>
          <DrawerContent>
            <AutoCompleteSearch isLoaded={isLoaded} />
            {open && (selectedItem === 'search' ? <SearchPanel /> : <FavoritesPanel />)}
          </DrawerContent>
        </DrawerWrapper>
      </Drawer>
    </Box>
  );
}