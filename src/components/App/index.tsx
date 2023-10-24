import AuthModal from '@/components/AuthModal'
import ConfirmExit from '@/components/ConfirmExit'
import ErrorBoundary from '@/components/ErrorBoundary'
import Map from '@/components/Map'
import MapError from '@/components/MapError'
import SideBar from '@/components/SideBar'

import { ContainerApp } from './styled'

function App() {
    return (
        <ContainerApp>
            <AuthModal />
            <ConfirmExit />
            <SideBar />
            <ErrorBoundary fallback={<MapError />}>
                <Map />
            </ErrorBoundary>
        </ContainerApp>
    )
}

export default App