import Plus from '@/assets/img/map-btn/plus.svg'
import Minus from '@/assets/img/map-btn/minus.svg'
import Delimeter from '@/assets/img/map-btn/del.svg'
import Location from '@/assets/img/map-btn/location.svg'
import { ButtonsControl, ButtonsZoom, ButtonZoom, ButtonLocation } from './styled'
import { useAppDispatch, useTypeSelector } from '@/hooks/redux'
import { MapServices } from '@/store/reducers'

export default function MapControls() {

    const dispatch = useAppDispatch()

    const {userLocation, zoom} = useTypeSelector(state => state.Map)

    const handleClickZoom = (value: number) => {
        dispatch(MapServices.actions.setZoom(zoom + value))
    }

    const handleClickLocation = () => {
        dispatch(MapServices.actions.setCenter(userLocation))
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
        </ButtonsControl>
    )
}