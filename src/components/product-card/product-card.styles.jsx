import styled from 'styled-components';

import { InvertedButton } from '../button/button.styles';

export const Image = styled.img`
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
`;

export const ProductCartContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 440px;
    align-items: center;
    position: relative;
    overflow: hidden;

    ${InvertedButton} {
        width: 80%;
        opacity: 0.7;
        position: absolute;
        top: 350px;
        display: none;
    }

    &:hover {
        ${Image} {
            opacity: 0.8;
        }

        ${InvertedButton} {
            opacity: 0.85;
            display: flex;
        }
    }

    @media screen and (max-width: 800px) {
        width: 45vw;
        height: 400px;

        ${InvertedButton} {
            width: 95%;
            display: block;
            min-width: unset;
            opacity: 0.8;
            padding: 0 10px;
            top: 250px;
        }
        &:hover {
            ${Image} {
                opacity: unset;
            }

            ${InvertedButton} {
                opacity: unset;
            }
        }
    }
`;
export const Name = styled.span`
    width: 90%;
    margin-bottom: 15px;

    @media screen and (max-width: 800px) {
        width: 100%;
        margin-bottom: 10px;
        text-align: center;
    }

    @media screen and (max-width: 400px) {
        font-size: 14px;
    }
`;
export const Price = styled.span`
    width: 10%;

    @media screen and (max-width: 800px) {
        width: 20%;
    }
    @media screen and (max-width: 400px) {
        font-size: 14px;
    }
`;

export const Footer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        height: 15%;
        justify-content: flex-start;
    }
`;
