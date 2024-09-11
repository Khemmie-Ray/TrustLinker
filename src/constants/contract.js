import { ethers } from "ethers";
import Abi from '../utility/abi.json'

export const getContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_contract_address,
        Abi,
        providerOrSigner
    );
