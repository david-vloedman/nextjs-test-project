import Link from 'next/link'
import styled from 'styled-components'

export default function Footer(){
    return <FooterStyle>
        
        This is just a study into an interesting technology stack.
        {' '}
        <Link href="mailto:djvloedman@gmail.com">
            <a>Contact Me</a>
        </Link>
        
    </FooterStyle>
}

const FooterStyle = styled.footer`
        font-size: .7rem;
        text-align: center;
        grid-column: 1 / span 3;
        grid-row 3 / span 1;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        margin-top: 10px;
    `;

    const Container = styled.div`
        margin-top: 10px;
        border-top: 1px solid #333;
    `;