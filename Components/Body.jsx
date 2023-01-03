import React from 'react'
import { useContext } from 'react'
import { ConnectionContext } from '../context'
import NavigationBar from './NavigationBar'



const Body = () => {

    const [connected, setConnected, provider, , address, setAddress, isChainCorrect] = useContext(ConnectionContext)

    if (!connected) {
        if (isChainCorrect === null) {
            return (
                <div data-v-1fb1860c="" id="app" className="background-img">
                    <NavigationBar/>
                    <header data-v-1fb1860c="" className="viewport-header">
                        <div data-v-1fb1860c="">
                            <h4 data-v-1fb1860c="" className="title">Cool Penguins</h4>
                            <h4 data-v-1fb1860c="" className="title">Holiday trip collection</h4>
                        </div>
                    </header>
                </div>
            )
        } else if (isChainCorrect === false) {
            return (<h1 className='text'>Incorrect Chain!</h1>);
        }
    }
    else if (connected) {
        return (
            <div>
                
            </div>
        );
    }
}

export default Body