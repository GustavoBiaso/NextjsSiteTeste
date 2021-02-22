import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--yellow);
    height: 120px;
    div{
        svg{
            font-size: 45px;
            cursor: pointer;
            margin: 0 10px;
            color: var(--black);
        }
    }
`;