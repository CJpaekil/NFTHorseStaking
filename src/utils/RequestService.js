import Web3 from 'web3';
import * as WalletService from './WalletService';

export const connect = async (val, onInstallMetaModalShow, activate, setActivatingConnector, setConnectionStatus) => {
    try {
        await activate(val, null, true);
        setConnectionStatus(2);
    } catch (e) {
        if (window.ethereum === undefined) {
            onInstallMetaModalShow && onInstallMetaModalShow();
        } else {
            setActivatingConnector(undefined);
            setConnectionStatus(1);
            console.error("error:", e);
        }
    }
};

export const requestChangeNetwork = async (chainId) => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: web3.utils.toHex(chainId) }],
        });
    } catch (err) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (err.code === 4902) {
            await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                    {
                        chainName: 'Polygon Mainnet',
                        chainId: web3.utils.toHex(chainId),
                        nativeCurrency: { name: 'MATIC', decimals: 18, symbol: 'MATIC' },
                        rpcUrls: ['https://polygon-rpc.com/'],
                    },
                ],
            });
        }
    }
}
