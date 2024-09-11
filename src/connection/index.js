import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

export const SUPPORTED_CHAIN = 11155420;

export const isSupportedChain = (chainId) =>
  Number(chainId) === SUPPORTED_CHAIN;

const LiskSepolia = {
  chainId: 4202,
  name: 'lisk',
  currency: 'ETH',
  explorerUrl: 'https://sepolia-blockscout.lisk.com',
  rpcUrl: import.meta.env.VITE_INFURA_RPC
}

const OptimismSepolia = {
  chainId: 11155420,
  name: 'OP Sepolia',
  currency: 'ETH',
  explorerUrl: 'https://optimism-sepolia.blockscout.com',
  rpcUrl: import.meta.env.VITE_INFURA_RPC
}

const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://localhost:5173',
  icons: ['https://localhost:5173']
}

export const configWeb3Modal = () => createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [OptimismSepolia],
  projectId: import.meta.env.VITE_projectId,
  enableAnalytics: false,
  themeVariables: {
    '--w3m-accent': '#222BAE',
    '--w3m-color-mix-strength': '40',
    '--w3m-border-radius-master': '10'
  }
})
