import { useContext, useEffect } from 'react'
import { ConnectionContext, ContractContext } from '../context'
import { ethers } from 'ethers'
import { useState } from 'react'

const Mint = () => {

    const [NFTABI, NFTAddress] = useContext(ContractContext)
    const [connected, setConnected, provider, , address, setAddress, isChainCorrect] = useContext(ConnectionContext)
    const [mintedIDs, setMintedIDs] = useState()
    const [mintedTamago, setMintedTamago] = useState()
    const [data, setData] = useState({})
    const [quantity, setQuantity] = useState(1);
    const [loader, setLoader] = useState(true);
    

    useEffect(() => {
        setLoader(false);
         fetchData()
       }, [address])

    async function fetchData() {
        const contract = new ethers.Contract(NFTAddress, NFTABI.abi, provider);

            const Price = await contract.Price();
            const totalSupply = await contract.totalSupply()
            console.log((Price/10**18).toString())
            const object = {
                "Price": String(Price),
                "totalSupply": String(totalSupply)
            }
            setData(object);
    }

    const incrementQuantity = () => {
        quantity + 1 <= 25 && setQuantity(quantity + 1);
    }
    const decrementQuantity = () => {
        quantity - 1 >= 1 && setQuantity(quantity - 1)
    }

    async function Mint() {
        const signer = provider.getSigner();
        const contract = new ethers.Contract(NFTAddress, NFTABI.abi, signer);
        try {
            let overrides = {
                from: address,
                value: (data.Price * quantity).toString(),
              
            }
            const transaction = await contract.Mint(address, quantity, overrides);
            await transaction.wait();
        }
        catch(err) {
        console.log(err);
        }
    }

    function refreshPage() {
        window.location.reload();
      }

        return (
            <div id="app">
                <div data-v-6e975dbe="" id="app">
                    <div data-v-6e975dbe="" className="bg-img-black text-white">
                        {<nav data-v-6e975dbe="" className="navbar">
                            <div data-v-6e975dbe="" className="container mx-auto px-4 pt-4 lg:px-16">
                                <div data-v-6e975dbe="" className="flex md:flex-col lg:flex-row space-x-2 space-y-6">
                                    <div data-v-6e975dbe="" className="nav-container">
                                        <div data-v-6e975dbe="" className="logo-container">
                                            <a data-v-6e975dbe="" href="https://twitter.com/EggsPudgy" target="_blank" className="logo">
                                                <img data-v-6e975dbe="" src="/Images/IGLOO_V2_600x200.png" alt="" className="logo1"/>
                                            </a>
                                        </div>
                                        <ul data-v-6e975dbe="" className="nav-list">
                                            <li data-v-6e975dbe="" className="nav-list-item homepage">
                                                <div data-v-6e975dbe="" className="navigation">
                                                    <a data-v-6e975dbe="" onClick={refreshPage}>
                                                        <h4 data-v-6e975dbe="">Home</h4>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div data-v-6e975dbe="" className="nav-list-bottom">
                                    <a data-v-6e975dbe="" href="https://etherscan.io/address/0x76C2b28B05B8E106013420554515ABc53316110b" target="_blank">
                                        <img data-v-6e975dbe="" src="/Images/block.21a33941.png" alt="" className="logosmall"/>
                                    </a>
                                    <a data-v-6e975dbe="" href="https://opensea.io/collection/coolpenguinswtf" target="_blank">
                                        <img data-v-6e975dbe="" src="/Images/os.6c2b45c7.png" alt="" className="logosmall"/>
                                    </a>
                                    <a data-v-6e975dbe="" href="https://twitter.com/EggsPudgy" target="_blank">
                                        <img data-v-6e975dbe="" src="/Images/twitter.944f02b3.png" alt="" className="logosmall"/>
                                    </a>
                                </div>
                            </div>
                        </nav>}
                        <main data-v-6e975dbe="">
                            <div data-v-6e975dbe="" className="relative">
                                <div data-v-6e975dbe="" className="opacity-25 absolute -z-10 top-40 lg:hidden">
                                    <img data-v-6e975dbe="" src="/img/logo32.d213eda0.png" alt=""/>
                                </div>
                                <div data-v-6e975dbe="" className="lg:flex paddings lg:justify-center">
                                    <div data-v-6e975dbe="" className="flex flex-col justify-center text-center py-32 space-y-6 z-10 px-4 lg:px-20">
                                        <div data-v-6e975dbe="" className="container1">
                                            <div data-v-6e975dbe="" className="box">
                                                <div data-v-6e975dbe="" className="font-semibold text-lg">
                                                    <h1 data-v-6e975dbe="" className="smallasfuck line"> Whenever you mint, mint with all your heart. </h1>
                                                </div>
                                                    <div data-v-6e975dbe="" className="font-semibold font-noto">
                                                        <h1 data-v-6e975dbe="" className="line smallasfuck"> Your Egg is you and you are COOL. </h1>
                                                    </div>
                                                    <div data-v-6e975dbe="" className="font-semibold font-noto">
                                                        <h1 data-v-6e975dbe="" className="line smallasfuck"> Egg Pudgy&apos;s - Only 8,888 in existence! </h1>
                                                        <br data-v-6e975dbe=""/>
                                                        <br data-v-6e975dbe=""/>
                                                        <h1 data-v-6e975dbe="" className="line smallasfuck">0.003 ETH per NFT.</h1>
                                                        <h1 data-v-6e975dbe="" className="line smallasfuck"> 25 NFT Maximum per 1 Transaction! </h1>
                                                    </div>
                                                    <div data-v-6e975dbe="" className="box1 flex justify-center items-center space-x-8">
                                                        <div data-v-6e975dbe="" className="flex items-center justify-center">
                                                            <a data-v-6e975dbe="" href="" className="hide">
                                                                <input data-v-6e975dbe="" type="number" className="w-32 h-12 lg:h-16 text-black text-center outline-none font-semibold lg:text-2xl lg:px-2 lg:w-40"/>
                                                            </a>
                                                            
                                                                <button data-v-6e975dbe="" id="min-btn" onClick={decrementQuantity} className="button1 font-bold h-12 lg:h-16 px-4 lg:px-6 bg-white text-black hover:bg-gray-200"> - </button>
                                                                <input data-v-6e975dbe=""  value={quantity} className="inputtext w-32 h-12 lg:h-16 text-black text-center outline-none font-semibold lg:text-2xl lg:px-2 lg:w-40"/>
                                                                <button data-v-6e975dbe="" id="plus-btn" onClick={incrementQuantity} className="button1 font-bold h-12 lg:h-16 px-4 lg:px-6 bg-white text-black hover:bg-gray-200"> + </button>
                                                        </div>
                                                        <button data-v-6e975dbe="" id="mint-btn" onClick={Mint} className="button1 bg-red-500 text-white h-12 font-semibold lg:h-16 px-8 lg:px-10 rounded-sm lg:text-2xl lg:font-bold hover:bg-red-400 duration-300"> MINT </button>
                                                    </div>
                                                    <div data-v-6e975dbe="" className="font-semibold text-5xl lg:text-6xl">
                                                </div>
                                                <div data-v-6e975dbe="" className="flex flex-col space-y-6">
                                                    <br></br>
                                                    <div data-v-6e975dbe="" id="supply" className="text-3xl font-bold">
                                                        <h1 data-v-6e975dbe="">Cost {data.Price * quantity/10**18} ETH</h1>
                                                    </div>
                                                    <br></br>
                                                    <div data-v-6e975dbe="" id="supply" className="text-3xl font-bold">
                                                        {data.totalSupply<8888?<><h1 data-v-6e975dbe="">{data.totalSupply} eggs from 8,888</h1></>:
                                                        <h1 data-v-6e975dbe="">SOLD OUT.</h1>}
                                                    </div>
                                                </div>
                                                <p data-v-6e975dbe="" id="address"></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-v-6e975dbe="" className="pad">
                                        <img data-v-6e975dbe="" src="/Images/62e1dfd0ea6d29a0b1f5ed10_credit_pengu.gif" alt="" width={20} className="gif"/>
                                    </div>
                            </div>
                        </div>
                        <div data-v-6e975dbe="" className="pingcontainer">
                            <img data-v-6e975dbe="" src="/Images/90ae344a-e976-463c-bf04-5fb2217cd738.png" alt="" className="pingui"/>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Mint