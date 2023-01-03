import { createContext, useContext, useState, useEffect } from 'react';
import NFTABI from '../artifacts/contracts/EGGSPUDGY.sol/EGGSPUDGY.json'


const ConnectionContext = createContext({});
const ContractContext = createContext({});



const Provider = ({ children }) => {
    const [connected, setConnected] = useState(false)
    const [provider, setProvider] = useState(null)
    const [address, setAddress] = useState(null)
    const [isChainCorrect,setIsChainCorrect] = useState(null)
    const value = [connected, setConnected, provider, setProvider, address, setAddress, isChainCorrect, setIsChainCorrect]

    return <ConnectionContext.Provider value={value}>{children}</ConnectionContext.Provider>;
};

export { ConnectionContext, Provider };

const Contract = ({ children }) => {
    const NFTAddress = '0x76BCcB8b649efa9e1314655c399DA7c37423cea6'
    const value = [NFTABI, NFTAddress]

    return <ContractContext.Provider value={value}>{children}</ContractContext.Provider>;
};

export { ContractContext, Contract };