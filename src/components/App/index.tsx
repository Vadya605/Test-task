import { ThemeProvider } from '@mui/material'

import AuthModal from '@/components/AuthModal'
import ConfirmExit from '@/components/ConfirmExit'
import ErrorBoundary from '@/components/ErrorBoundary'
import Map from '@/components/Map'
import MapError from '@/components/MapError'
import SideBar from '@/components/SideBar'
import { useTypeSelector } from '@/hooks/redux'
import { getTheme } from '@/utils/getTheme'

import { ContainerApp } from './styled'

function App() {
    const {mode} = useTypeSelector(state => state.Mode)
    const theme = getTheme(mode)
    
    return (
        <ThemeProvider theme={theme}>
            <ContainerApp>
                <AuthModal />
                <ConfirmExit />
                <SideBar />
                <ErrorBoundary fallback={<MapError />}>
                    <Map />
                </ErrorBoundary>
            </ContainerApp>
        </ThemeProvider>
    )
}

export default App