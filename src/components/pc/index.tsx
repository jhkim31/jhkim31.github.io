import styled from 'styled-components';
import Content from '@pc/defaults/Content';
import Sidebar from '@pc/defaults/Sidebar';

const Main = styled.div`    
`

export default function PC(){        
    return (
        <Main>
            <Sidebar />
            <Content />                        
        </Main>
    )
}