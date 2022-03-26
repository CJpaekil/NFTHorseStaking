import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { getrpcURLWithChainId } from './WalletService';

export const injected = new InjectedConnector({
    supportedChainIds: [137]
    // supportedChainIds: [1, 3, 56, 97, 137]
});

export const walletconnect = new WalletConnectConnector({
    rpc: {
        1: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
        137: getrpcURLWithChainId(137)
    },
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true,
    pollingInterval: 15000
})