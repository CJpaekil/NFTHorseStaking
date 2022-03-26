import styled from "styled-components";

export const Styles = styled.div`


    .nft-card {
        background: #ffffff36;
        border: 2px solid #71d8e3;
        border-radius: 10px;
        box-shadow: 0 0 2px 2px #00000094;
        overflow: hidden;
        -webkit-transition: all .3s;
        -moz-transition: all .3s;
        -ms-transition: all .3s;
        -o-transition: all .3s;
        transition: all .3s;
    }

    .nft-card:hover {
        -webkit-transform: scale(1.05, 1.05);
        -moz-transform: scale(1.05, 1.05);
        -ms-transform: scale(1.05, 1.05);
        -o-transform: scale(1.05, 1.05);
        transform: scale(1.05, 1.05);
    }

    .nft-card img {
        border-radius: 10px 10px 0 0;
    }

    .card-info {
        background: #000000b8;
    }

    .nft-name {
        background-color: #00b8ce;
        color: #dfdfdf !important;
        padding: 2px 5px;
        border-radius: 13px;
        font-size: 13px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20px;
    }

    .nft-cap {
        padding: 2px 4px;
        background-color: #ddd;
        border-radius: 3px;
        font-size: 12px;
    }
`