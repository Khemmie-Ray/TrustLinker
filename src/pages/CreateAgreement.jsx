import React, {useState} from 'react'
import { Web3 } from "web3";
import { Models, ORAPlugin, Chain } from "@ora-io/web3-plugin-ora";
import { CircularProgress } from '@mui/material';
import CreateContract from '../components/CreateContract';
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { toast } from 'react-toastify';
import { ethers } from 'ethers';
import { getContract } from '../constants/contract';

function CreateAgreement() {

    const [fee, setFee] = useState('')
    const [account, setAccount] = useState('')
    const [txHash, setTxHash] = useState('')
    const [result, setResult] = useState('')

    const {address} = useWeb3ModalAccount()
    const { walletProvider } = useWeb3ModalProvider();

    const [isPending, setIsPending] = useState(false)

    const [formData, setFormData] = useState({
        title: '',
        partyAname: '',
        partyBname: '',
        partyBAddress: '',
        type: '',
        duration: ''
    })

    const inputChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    }

    // interactiong with contract
    const createAgreement = async () => {

        const provider = new ethers.BrowserProvider(walletProvider);

        const signer = await provider.getSigner();

        const contract = await getContract(signer)

        try {

            const transaction = await contract.createAgreement(result, formData.partyBAddress)

            console.log("transaction: ", transaction);
            const receipt = await transaction.wait();

            console.log("receipt: ", receipt);

            if (receipt.status) {
                return toast.success('successful')
            }

            
        } catch (error) {
            toast.error(error)
        }
    }

    // using web3js 
  const web3 = new Web3(window.ethereum)

  web3.registerPlugin(new ORAPlugin(Chain.OPTIMISM_SEPOLIA))

  const sendPrompt = async (e) => {
    
    e.preventDefault()

    setIsPending(true)

    const PROMPT = `write a ${formData.type} agreement between ${formData.partyAname} and ${formData.partyBname} to elapse on ${formData.duration}, with a title of ${formData.title}`

    const fee = await web3.ora.estimateFee(Models.LLAMA2)

    setFee(fee.toString())

    const acct = await web3.eth.requestAccounts()

    setAccount(acct[0])

    const txReciept = await web3.ora.calculateAIResult(acct[0], Models.LLAMA2, PROMPT, fee)

    setTxHash(txReciept.transactionHash)

    setIsPending(false)

  }

  const fetchResult = async () => {

    setIsPending(true)

    const  PROMPT = `write a ${formData.type} agreement between ${formData.partyAname} and ${formData.partyBname} to elapse on ${formData.duration}, with a title of ${formData.title}`

    const result = await web3.ora.getAIResult(Models.LLAMA2, PROMPT);

    setIsPending(false)

    setResult(result)
  }

  return (
    <div className='flex flex-col px-5 gap-y-4 border'>
        <h4 className='font-bold text-[25px]'>Create-Contract</h4>

        <div className='flex flex-col w-6/12 gap-y-8 m-auto border border-blue-400 p-8'>
            <div className='flex flex-col gap-y-2'>
                <h4>Contract title</h4>
                <input 
                    type="text"
                    placeholder='title'
                    className='placeholder-slate-300'
                    name='title'
                    value={formData.title}
                    onChange={inputChange}
                />
            </div>

            <div className='flex flex-col gap-y-2'>
                <h4>Party A name</h4>
                <input 
                    type="text"
                    placeholder='e.g santiago'
                    className='placeholder-slate-300'
                    name='partyAname'
                    value={formData.partyAname}
                    onChange={inputChange}
                />
            </div>

            <div className='grid grid-cols-2 gap-x-2'>
                <div className='flex flex-col gap-y-2'>
                    <h4>Party B name</h4>
                    <input 
                        type="text"
                        placeholder='e.g santiago'
                        className='placeholder-slate-300'
                        name='partyBname'
                        value={formData.partyBname}
                        onChange={inputChange}
                    />
                </div>

                <div className='flex flex-col gap-y-2'>
                <h4>Party B Address</h4>
                <input 
                    type="text"
                    placeholder='e.g 0x123445567aaaaaabbbbbbbcccccc.....'
                    className='placeholder-slate-300'
                    name='partyBAddress'
                    value={formData.partyBAddress}
                    onChange={inputChange}
                />
            </div>
            </div>

            <div className='flex flex-col gap-y-2'>
                <h4>Contract Type</h4>
                <select name="type" value={formData.type} onChange={inputChange} id="">
                    <option value="">select</option>
                    <option value="sales">sales</option>
                    <option value="employment">employment</option>
                </select>
            </div>

            <div className='flex flex-col gap-y-2'>
                <h4>Contract Duration</h4>
                <input 
                    type='date'
                    name='duration'
                    value={formData.duration}
                    onChange={inputChange}
                />
            </div>

            {!txHash && <button onClick={sendPrompt} className='p-3 bg-blue-400 text-semibold hover:bg-blue-300 hover:text-blue-700 font-bold text-white'>Generate Agreement</button>}

            {txHash && <button onClick={fetchResult} className='p-3 bg-green-400 text-semibold hover:bg-green-300 hover:text-green-700 font-bold text-white'>View Agreement</button>}

            {isPending && <CircularProgress className='animate-spin m-auto'/>}
            {fee && <small><small className='font-bold'>Tx fee</small>{fee}</small>}
            {txHash && <small><small className='font-bold'>Tx hash</small>{txHash}</small>}

            {result != '' && <CreateContract data={result} sign={createAgreement}/>}
        </div>
    </div>
  )
}

export default CreateAgreement