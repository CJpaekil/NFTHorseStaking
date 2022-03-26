import { useWeb3React } from "@web3-react/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Dropdown, Form, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import Card from "../../components/Card/Card";
import ConnectWallet from "../../components/Modal/ConnectWallet";
import { mainnetURL } from "../../utils/api";
import { injected, walletconnect } from "../../utils/Connector";
import { requestChangeNetwork } from "../../utils/RequestService";
import { Styles } from "./styles"


const Staking = () => {

    const { active, chainId, account, deactivate, activate, library } = useWeb3React();
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [nfts, setNFTs] = useState([]);
    const [pending, setPending] = useState(false);

    useEffect(() => {
        if (window.ethereum === undefined) {
            toast.warning("Please install Metamask");
        } else {
            if (Number(window.ethereum.networkVersion) !== 137) {
                toast.warning("Please switch network to Polygon");
            } else {
                onConnectMetamask();
            }
        }
    }, [])

    useEffect(() => {
        if (Number(window.ethereum.networkVersion) !== 137) {
            requestChangeNetwork('0x61');
        }
    }, [chainId])

    useEffect(() => {
        const getNFTs = async () => {
            setPending(true);
            const params = {
                owner: account,//"0x502924fd117899cc6a007c71fa60d51acb09906e",
                limit: 12 * page
            }
            var options = {
                method: 'GET',
                url: mainnetURL,
                params: params,
            };

            await axios.request(options).then(async function (res) {
                setPending(false);
                console.log(res.data);
                setNFTs(res.data.assets);
            }).catch(function (error) {
                setPending(false);
                console.error(error);
            });
        }
        if (account !== undefined) {
            getNFTs()
        }
    }, [account, page])

    const onConnectMetamask = async () => {
        try {
            await activate(injected);
        } catch (err) {
            console.log(err)
        }
    }

    const onConnectWalletConnector = async () => {
        try {
            await activate(walletconnect);
        } catch (err) {
            console.log(err);
        }
    }

    const disconnect = () => {
        try {
            deactivate();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Styles>
            <div className="container">
                <div className="page-wrapper p-4">
                    <div className="position-relative">
                        <img src="assets/images/title.png" alt="" className="d-block m-auto" width="50%" />
                        {
                            active ? (
                                <Button
                                    className="btn-wallet"
                                    variant="outline-warning"
                                    size="sm"
                                    onClick={disconnect}
                                >
                                    {account?.slice(0, 6)}...{account?.slice(account.length - 4, account.length)}
                                </Button>
                            ) : (
                                <Button
                                    className="btn-wallet"
                                    variant="outline-warning"
                                    size="sm"
                                    onClick={() => setOpen(true)}
                                >Connect Wallet</Button>
                            )
                        }
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-6 col-12 d-flex">
                            <span className="color-light-blue">BLOODLINE: </span>
                            <span className="px-2 filter-key">
                                <Form.Check>
                                    <Form.Check.Input type="checkbox" isValid />
                                    <Form.Check.Label>All</Form.Check.Label>
                                </Form.Check>
                            </span>
                            <span className="px-2 filter-key">
                                <Form.Check>
                                    <Form.Check.Input type="checkbox" isValid />
                                    <Form.Check.Label>Hoz</Form.Check.Label>
                                </Form.Check>
                            </span>
                            <span className="px-2 filter-key">
                                <Form.Check>
                                    <Form.Check.Input type="checkbox" isValid />
                                    <Form.Check.Label>Compono</Form.Check.Label>
                                </Form.Check>
                            </span>
                            <span className="px-2 filter-key">
                                <Form.Check>
                                    <Form.Check.Input type="checkbox" isValid />
                                    <Form.Check.Label>Klin</Form.Check.Label>
                                </Form.Check>
                            </span>
                            <span className="px-2 filter-key">
                                <Form.Check>
                                    <Form.Check.Input type="checkbox" isValid />
                                    <Form.Check.Label>Zon</Form.Check.Label>
                                </Form.Check>
                            </span>
                        </div>
                        <div className="col-md-6 col-12 d-flex justify-content-end">
                            <Dropdown className="mx-2">
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                    Gender
                                </Dropdown.Toggle>
                                <Dropdown.Menu variant="dark">
                                    <Dropdown.Item href="#/action-1" active>
                                        All
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Male</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Female</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown className="mx-2">
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                    Breed Type
                                </Dropdown.Toggle>
                                <Dropdown.Menu variant="dark">
                                    <Dropdown.Item href="#/action-1" active>
                                        All
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Founding</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Legendary</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Epic</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Rare</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Pacer</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown className="mx-2">
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                    Sort By
                                </Dropdown.Toggle>
                                <Dropdown.Menu variant="dark">
                                    <Dropdown.Item href="#/action-1" active>
                                        Newest
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Oldest</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Price [Low-High]</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Price [High-Low]</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Energy [Low-High]</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <hr className="divider" />
                    <div className="row" style={{ minHeight: 500 }}>
                        {
                            pending ? (
                                <Spinner animation="border" variant="warning" className="m-auto" />
                            ) : nfts.slice(12 * (page - 1), 12 * page)
                                .map((item, index) => (
                                    <div className="col-lg-3 col-md-4 col-6 my-2" key={index}>
                                        <Card data={item} />
                                    </div>
                                ))
                        }
                    </div>
                    <div className="row my-4">
                        <div className="col-12 d-flex justify-content-center">
                            <Button
                                variant="outline-success mx-2"
                                style={{ minWidth: 100 }}
                                onClick={() => setPage(prev => page > 1 ? prev - 1 : prev)}
                                disabled={page === 1}
                            >Prev</Button>
                            <Button
                                variant="outline-success mx-2"
                                style={{ minWidth: 100 }}
                                onClick={() => setPage(prev => prev + 1)}
                                disabled={nfts.length === 0}
                            >Next</Button>
                        </div>
                    </div>
                </div>
            </div>
            <ConnectWallet
                open={open}
                hideModal={() => setOpen(false)}
                connectMetamask={onConnectMetamask}
                connectWalletConnector={onConnectWalletConnector}
            />
        </Styles>
    )
}

export default Staking;