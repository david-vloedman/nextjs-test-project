import styled from 'styled-components'

export default function Header(){



    return <HeaderStyle>
        <Container>
            <h1>NextJS Testing Ground</h1>
        </Container>
        </HeaderStyle>
}

const HeaderStyle = styled.header`
    grid-row: 1 / span 1;
    grid-column: 1 / span 2;
    padding-left: 10px;
    padding-right: 10px;
`;

const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: 2rem;
    border-bottom: 1px solid #1A1C20;
`;
