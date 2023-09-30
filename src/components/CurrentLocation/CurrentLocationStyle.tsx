import { styled } from '@mui/material/styles';
import { Marker } from '@react-google-maps/api';

export const CustomMarker = styled(Marker)(() => ({
    zIndex: 100,
}))