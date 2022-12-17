import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;

    .name,
    .price {
        width: 23%;
    }

    .name {
        @media screen and (max-width: 1000px) {
            width: 35%;
        }
    }
    .price {
        @media screen and (max-width: 1000px) {
            width: 10%;
        }
    }

    @media screen and (max-width: 1000px) {
        font-size: 16px;
    }
`;

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const Quantity = styled.span`
    width: 23%;
    display: flex;
    align-items: center;

    .arrow {
        cursor: pointer;
    }

    .value {
        margin: 0 10px;
    }

    @media screen and (max-width: 1000px) {
        width: 20%;
    }
`;

export const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;
