import { ChevronLeft } from '@mui/icons-material'

import AutoCompleteSearch from '@/components/AutoCompleteSearch';
import FavoritesPanel from '@/components/FavoritesPanel';
import SearchPanel from '@/components/SearchPanel';
import { useAppDispatch, useTypeSelector } from '@/hooks/redux';
import { setIsOpenDrawer, setSelectedSection } from '@/store/reducers';

import Aside from '../Aside';
import ErrorBoundary from '../ErrorBoundary';
import FavoritesError from '../FavoritesError';
import {
    ArrowClose,
    Container, Drawer, DrawerContent, DrawerWrapper,
} from './styled';

export default function SideBar() {
    const dispatch = useAppDispatch()
    const { isOpen, selectedSection } = useTypeSelector(state => state.Drawer)

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