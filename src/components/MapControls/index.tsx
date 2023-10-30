import Delimeter from '@/assets/img/map-btn/del.svg'
import Location from '@/assets/img/map-btn/location.svg'
import Minus from '@/assets/img/map-btn/minus.svg'
import Plus from '@/assets/img/map-btn/plus.svg'
import { useAppDispatch, useTypeSelector } from '@/hooks/redux'
import { setCenter, setMode, setZoom } from '@/store/reducers'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { ButtonLocation,ButtonsControl, ButtonsZoom, ButtonTheme, ButtonZoom } from './styled'

export default function MapControls() {

    const dispatch = useAppDispatch()

    const {userLocation, zoom} = useTypeSelector(state => state.Map)
    const {mode} = useTypeSelector(state => state.Mode)

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
                <ButtonZoom onClick={() => handleClickZoom(1)}>
                    <img src={Plus} alt="Plus" />
                </ButtonZoom>
                <img src={Delimeter} alt="Delimeter" />
                <ButtonZoom onClick={() => handleClickZoom(-1)}>
                    <img src={Minus} alt="Minus" />
                </ButtonZoom>
            </ButtonsZoom>
            <ButtonTheme onClick={handleClickTheme}>
                { mode === 'light'? <Brightness4Icon />: <Brightness7Icon />}
            </ButtonTheme>
        </ButtonsControl>
    )
}