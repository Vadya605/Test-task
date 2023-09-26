import { useState } from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Logo from '../../assets/img/Logo.svg'
import Favorite from '../svg/Favorite';
import Search from '../svg/Search'
import SideBarStyles from './SideBarStyles'
import FavoritesPanel from '../FavoritesPanel/FavoritesPanel';

// вынести css и выбрать адекватный способ его написания

const drawerWidth = 550;
const itemsDrawer = [
  {
    id: 1,
    name: 'search',
    icon: <Search />
  },
  {
    id: 2,
    name: 'favorites',
    icon: <Favorite />
  }
]

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(11)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(13)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const DrawerWrapper = styled('div')(() => ({
  display: 'flex',
  columnGap: '20px',
  padding: '25px'
}))


const Aside = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}))

const ListSections = styled(List)(() => ({
  marginTop: '40px'
}))

const SectionItem = styled(ListItem)(() => ({
  marginBottom: '10px'
}))


export default function SideBar() {
  const sideBarStyles = SideBarStyles()
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
              <div className="logo">
                <img src={Logo} alt="" />
              </div>
              <ListSections>
                  {itemsDrawer.map(item => (
                    <SectionItem className={sideBarStyles.classes.test} disablePadding key={item.name} onClick={() => handleClickSectionItem(item.name)}>
                      {item.icon}
                    </SectionItem>
                  ))}
              </ListSections>
          </Aside>
          <FavoritesPanel />
        </DrawerWrapper>
      </Drawer>
    </Box>
  );
}