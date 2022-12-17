import styled from 'styled-components';

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    h2 {
        margin: 10px 0;
    }
    @media screen and (max-width: 1000px) {
        width: 90%;
        margin-bottom: 60px;
    }
`;
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;

    > button {
        @media screen and (max-width: 1000px) {
            min-width: unset;
            margin-bottom: 60px;
            width: 48%;
        }
    }
`;
