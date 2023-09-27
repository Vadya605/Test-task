import { useState } from 'react';
import Box from '@mui/material/Box';
import Logo from '../../assets/img/Logo.svg'
import Favorite from '../svg/Favorite';
import Search from '../svg/Search'
import { Drawer, DrawerContent, DrawerWrapper } from './Styled/Drawer';
import { ListSections, SectionItem } from './Styled/List';
import { Aside } from './Styled/Aside';
import FavoritesPanel from '../FavoritesPanel/FavoritesPanel';
import SearchPanel from '../SearchPanel/SearchPanel';
import { SearchBox, SearchIcon, SearchInput } from './Styled/Search';
import { AsideButtonFavorites, AsideButtonSearch } from './Styled/Aside';

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


export default function SideBar() {
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
              <div className="logo" onClick={() => setOpen(!open)}>
                <img src={Logo} alt="" />
              </div>
              <ListSections>
                  {itemsDrawer.map(item => (
                    <SectionItem disablePadding key={item.name} onClick={() => handleClickSectionItem(item.name)}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        {item.button}
                      </div>
                  </SectionItem>
                  ))}
              </ListSections>
          </Aside>
          <DrawerContent>
            <SearchBox>
              <SearchIcon />
              <SearchInput placeholder='Место адрес...' />
            </SearchBox>
          { open && (selectedItem === 'search'? <SearchPanel />: <FavoritesPanel/>)} 
          </DrawerContent>
        </DrawerWrapper>
      </Drawer>
    </Box>
  );
}