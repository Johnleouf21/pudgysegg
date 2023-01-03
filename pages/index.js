import { ConnectionContext } from '../context'
import { useContext, React } from 'react'
import Mint from '../Components/Mint'
import Body from '../Components/Body'



export default function Home() {

  const [connected, setConnected, provider, , address, setAddress, isChainCorrect] = useContext(ConnectionContext)

  if (connected) {
    return (
      <>
        <Mint/>
      </>
    )
  }
  else {
    return (
      <Body/>
    )
  }

}
