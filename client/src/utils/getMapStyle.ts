import { PaletteMode } from "@mui/material";

import { MAP_STYLE_DARK, MAP_STYLE_LIGHT } from "@/constants";

export const getMapStyle = (mode: PaletteMode) => {
    return mode === 'dark'? MAP_STYLE_DARK: MAP_STYLE_LIGHT
}