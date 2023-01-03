import { ConnectionContext } from '../context'
import { useContext, React } from 'react'




export default function admin() {

  const [connected, setConnected, provider, , address, setAddress, isChainCorrect] = useContext(ConnectionContext)

  if (connected) {
    return (
     <></>
    )

}
