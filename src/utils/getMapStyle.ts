import { MAP_STYLE_DARK, MAP_STYLE_LIGHT } from "@/constants";
import { PaletteMode } from "@mui/material";

export const getMapStyle = (mode: PaletteMode) => {
    return mode === 'dark'? MAP_STYLE_DARK: MAP_STYLE_LIGHT
}