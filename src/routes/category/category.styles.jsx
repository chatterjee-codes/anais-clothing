import styled from 'styled-components';

export const CategoryTitle = styled.h2`
    font-size: 38px;
    margin-top: 25px;
    margin-bottom: 25px;
    text-align: center;
`;
export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;

    @media (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }
`;
