import { ChevronLeft } from '@mui/icons-material'

import Arrow from '@/assets/img/Arrow.svg'
import AutoCompleteSearch from '@/components/AutoCompleteSearch';
import FavoritesPanel from '@/components/FavoritesPanel';
import SearchPanel from '@/components/SearchPanel';
import { useAppDispatch, useTypeSelector } from '@/hooks/redux';
import { DrawerServices } from '@/store/reducers';

import ErrorBoundary from '../ErrorBoundary';
import FavoritesError from '../FavoritesError';
import {
    ArrowClose, ArrowOpen,
    Container, Drawer, DrawerContent, DrawerWrapper,
} from './styled';
import Aside from '../Aside';

export default function SideBar() {
    const dispatch = useAppDispatch()
    const { isOpen, selectedSection } = useTypeSelector(state => state.Drawer)

    const handleClickArrow = () => {
        dispatch(DrawerServices.actions.setOpen(!isOpen))
    }

    return (
        <Container>
            <Drawer variant="permanent" open={isOpen}>
                <DrawerWrapper className='drawerWrapper'>
                    <Aside />
                    <DrawerContent className='drawerContent'>
                        {isOpen && <ArrowClose onClick={handleClickArrow} ><ChevronLeft /></ArrowClose>}
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