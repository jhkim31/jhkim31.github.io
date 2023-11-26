import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import IConfig from "@interface/IConfig";
import styled from "styled-components"
import axiosInstance from "@api";

const HeaderWrapper = styled.div<{ scrollY: number }>`
    height: ${props => props.scrollY > 100 ? 50 : 100}px;
    width: 100%;
    background: red;
    position: fixed;
    top: 0;    
    transition: 0.3s ease;
    display: flex;
    justify-content: flex-end;    
`

const NavItem = styled.a`
    margin: 10px;
`

interface HeaderNavItem {
    label: string;
    anchor: string;
}

export default function Header() {
    const config = useSelector((config: IConfig) => config);
    const [scrollY, setScrollY] = useState(window.scrollY);
    const [headerNavItems, setHeaderNavItems] = useState<HeaderNavItem[]>([]);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    }

    useEffect(() => {
        axiosInstance('/config/headernav.json')
            .then(d => {
                setHeaderNavItems(d.data);
            })
            .catch(e => {
                console.error(e);
            })

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <HeaderWrapper scrollY={scrollY}>
            {headerNavItems.map((headerNavItem) => {
                return <NavItem key={Math.random()} href={headerNavItem.anchor}>{headerNavItem.label}</NavItem>
            })}
        </HeaderWrapper>
    )
}