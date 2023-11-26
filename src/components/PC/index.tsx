import { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from "@api";
import Content from '@components/PC/defaults/Content';
import Sidebar from './defaults/Sidebar';

const Main = styled.div`    
`

export default function PC(){
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        api.get("/config/theme.json")
            .then(d => console.log(d.data));

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Main>
            <Sidebar />
            <Content />                        
        </Main>
    )
}