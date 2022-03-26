import { Button } from "react-bootstrap";
import { Styles } from "./styles";

const Card = ({ data }) => {
    return (
        <Styles>
            <div className="nft-card">
                <img src={data.image_url} alt="" width="100%" />
                <div className="py-2 px-3 card-info">
                    <div className="d-flex justify-content-between my-2">
                        <span className="nft-name">{data.name}</span>
                        <span style={{ color: '#ffffff6b' }}>
                            {data.creator.address.slice(0, 6)}...{data.creator.address.slice(data.creator.address.length - 4, data.creator.address.length)}
                        </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <span className="mx-2" style={{ color: '#ffffff6b' }}>● Klin</span>
                            <span className="mx-2" style={{ color: '#ffffff6b' }}>● Founding</span>
                            <span className="mx-2" style={{ color: '#ffffff6b' }}>● Male</span>
                        </div>
                        <div>
                            <span className="nft-cap">25/25</span>
                        </div>
                    </div>
                    <Button className="d-flex justify-content-center align-items-center w-100 mt-2" size="sm">
                        330 for 7 day(s)
                    </Button>
                </div>
            </div>
        </Styles>
    )
}

export default Card;