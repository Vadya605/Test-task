import CurrentLocationIcon from '@/assets/img/CurrentLocation.svg'

import { CurrentLocationProps } from './interface'
import { CustomMarker } from './styled'

export default function CurrentLocation({ position }: CurrentLocationProps){
    return(
        // <></>
        <CustomMarker icon={CurrentLocationIcon} position={position} />
    )
}