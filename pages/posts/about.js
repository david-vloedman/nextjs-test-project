import styled from 'styled-components'
import Layout from '../../components/layout'

export default function About(){
    return <Layout>
            
                <PhotoContainer>
                    <Photo
                        src="/images/me.jpg"
                        alt="David"
                    />
                </PhotoContainer>
                <Heading>
                <h1>Just me, playing around</h1>
                </Heading>
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            
        </Layout>
}


const PhotoContainer = styled.div`
    width: 8rem;
    height: 8rem;
    margin: auto;
`;

const Photo = styled.img`
    border-radius: 9999px;
    width: 150px;
    height: 150px;
    border: 2px dotted #72893F;
    `;

const Heading = styled.div`
    text-align: center;
`;

const Text = styled.p`
    font-size: 1rem;
`;