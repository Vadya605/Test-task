import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { AppDispath, RootState } from '../store/store'

export const useAppDispath = () => useDispatch<AppDispath>()
export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector