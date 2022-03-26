import { Button, Modal } from "react-bootstrap";
import { Styles } from "./styles";

const ConnectWallet = (props: any) => {

    return (
        <Styles>
            <Modal show={props.open} onHide={props.hideModal}>
                <Modal.Body className="p-1" style={{ backgroundColor: '#000000e0' }}>
                    <div className="text-center p-2">
                        <Button
                            variant="secondary"
                            className="w-100 background-transparent color-black mb-2"
                            onClick={() => props.connectMetamask() & props.hideModal()}
                            style={{ borderColor: '#ddd', backgroundColor: '#00000052 !important' }}
                        >
                            <div className="metamask text-center">
                                <img className="metamask-img my-2" src="assets/images/metamask.svg" alt="img" width={'50px'} />
                                <p className="metamask-title Tanker">MetaMask</p>
                                <p className="metamask-txt Tanker">Connect to MetaMask Wallet</p>
                            </div>
                        </Button>
                        <Button
                            variant="secondary"
                            className="w-100 background-transparent color-black"
                            onClick={() => props.connectWalletConnector() & props.hideModal()}
                            style={{ borderColor: '#ddd', backgroundColor: '#00000052 !important' }}
                        >
                            <div className="walletconnect text-center">
                                <img className="walletconnect-img my-2" src="assets/images/walletconnect.svg" alt="img" width={'50px'} />
                                <p className="walletconnect-title Tanker">WalletConnect</p>
                                <p className="walletconnect-txt Tanker"> Scan and Connect to Trust Wallet</p>
                            </div>
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </Styles>
    )
}

export default ConnectWallet;