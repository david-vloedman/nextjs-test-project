import styled from 'styled-components'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Nav from '../components/nav'

export default function Layout({children}){
    return (
        <LayoutStyle>
            <Head>
                <title>David does Nextjs</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <Nav/>
            <MainStyle>
                {children}
            </MainStyle>
            <Footer/>
        </LayoutStyle>
    )
}

const LayoutStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 6fr;
    grid-template-rows: 1fr 6fr 1fr;
    max-width: 95%;
    margin-left: auto;
    margin-right: auto;
    background-color:#e6efff;
    color: #30343b;
`;

const MainStyle = styled.main`
    padding: 25px;
    grid-row: 2 / span 1;
    grid-column: 2 / span 1;
`;