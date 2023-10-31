import { ChevronLeft } from '@mui/icons-material'

import Aside from '@/components/Aside';
import AutoCompleteSearch from '@/components/AutoCompleteSearch';
import ErrorBoundary from '@/components/ErrorBoundary';
import FavoritesError from '@/components/FavoritesError';
import FavoritesPanel from '@/components/FavoritesPanel';
import SearchPanel from '@/components/SearchPanel';
import { useAppDispatch, useTypeSelector } from '@/hooks/redux';
import { setIsOpenDrawer, setSelectedSection } from '@/store/reducers';

import { ArrowClose, Container, Drawer, DrawerContent, DrawerWrapper } from './styled';

export default function SideBar() {
    const dispatch = useAppDispatch()
    const { Drawer: { isOpen, selectedSection } } = useTypeSelector(state => state)

    const handleClickArrowClose = () => {
        dispatch(setIsOpenDrawer(false))
        dispatch(setSelectedSection(''))
    }

    return (
        <Container>
            <Drawer variant="permanent" open={isOpen}>
                <DrawerWrapper className='drawerWrapper'>
                    <Aside />
                    <DrawerContent className='drawerContent'>
                        {isOpen && <ArrowClose onClick={handleClickArrowClose} ><ChevronLeft /></ArrowClose>}
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
        </Container>
    );
}