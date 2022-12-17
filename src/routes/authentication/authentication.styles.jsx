import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-around;
    margin: 30px auto;

    @media screen and (max-width: 1000px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`;
