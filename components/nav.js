import styled from 'styled-components'
import Link from 'next/link'

export default function Nav(){
    return <NavStyle>
        <UL>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/posts/about">
                    <a>About</a>
                </Link>
            </li>

            <li>
                <Link href="/todo-list/todo-list">
                    <a>To Do App</a>
                </Link>
            </li>
        </UL>
    </NavStyle>
}

const NavStyle = styled.nav`
    grid-column: 1 / span 1;
    grid-row: 2 / span 3;
`;

const UL = styled.ul`
    list-style: none;
    border-right: 1px solid black;
`;
