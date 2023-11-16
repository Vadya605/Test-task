import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import Delimeter from '@/assets/img/map-btn/del.svg'
import Location from '@/assets/img/map-btn/location.svg'
import Minus from '@/assets/img/map-btn/minus.svg'
import Plus from '@/assets/img/map-btn/plus.svg'
import { useAppDispatch, useTypeSelector } from '@/hooks'
import { setCenter, setMode, setZoom } from '@/store/reducers'

import { ButtonLocation,ButtonsControl, ButtonsZoom, ButtonTheme, ButtonZoom } from './styled'

export default function MapControls() {
    const dispatch = useAppDispatch()

    const {
        Map: { userLocation, zoom },
        Mode: { mode }
    } = useTypeSelector(state => state)

    const handleClickZoom = (value: number) => {
        dispatch(setZoom(zoom + value))
    }

    const handleClickLocation = () => {
        dispatch(setCenter(userLocation))
    }

    const handleClickTheme = () => {
        const newMode = mode === 'light' ? 'dark': 'light'
        dispatch(setMode(newMode))
    }

    return (
        <ButtonsControl data-testid='map-controls'>
            <ButtonLocation onClick={handleClickLocation}>
                <img src={Location} alt="Location" />
            </ButtonLocation>
            <ButtonsZoom>
                <ButtonZoom onClick={handleClickZoom.bind(null, 1)}>
                    <img src={Plus} alt="Plus" />
                </ButtonZoom>
                <img src={Delimeter} alt="Delimeter" />
                <ButtonZoom onClick={handleClickZoom.bind(null, -1)}>
                    <img src={Minus} alt="Minus" />
                </ButtonZoom>
            </ButtonsZoom>
            <ButtonTheme onClick={handleClickTheme}>
                { mode === 'light'? <Brightness4Icon />: <Brightness7Icon />}
            </ButtonTheme>
        </ButtonsControl>
    )
}