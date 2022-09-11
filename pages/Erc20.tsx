import { useAccount } from 'wagmi'

function App() {
    const { address, isConnecting, isDisconnected } = useAccount()

    if (isConnecting) return <div>Connecting…</div>
    if (isDisconnected) return <div>Disconnected</div>
    return <div>{address}</div>
}

export default App