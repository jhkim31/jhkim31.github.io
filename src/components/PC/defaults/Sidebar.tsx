import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { GithubIcon, GitlabIcon, NotionIcon } from '@pc/common/icons';
import config from '@pc/config';
import { A } from '@pc/common';

const SidebarWrapper = styled.div`    
    width: ${config.sidebar.width}px;
    background: ${config.sidebar.backgroundColor};
    color: ${config.sidebar.color};
    position: fixed;
    height: 100%;
    display: flex;    
    flex-direction: column;
    justify-content: space-between;    
    overflow: scroll;    
`

const SidebarContent = styled.div`
    padding: ${config.sidebar.content.padding}px;
    width: 100%;        
    display: flex;
    flex-direction: column;    
    align-items: center;
`

const SidebarTitle = styled.div`
    width: 100%;
    margin-top: ${config.sidebar.title.marginTop}px;
    margin-bottom: ${config.sidebar.title.marginBottom}px;

    font-size: ${config.sidebar.title.fontSize}px;    
    font-weight: ${config.sidebar.title.fontWeight};       
`

const SidebarImg = styled.img`
    width: ${config.sidebar.img.width}px;        
    border-radius: ${config.sidebar.img.borderRadius}px;
`

const ContactIconContainer = styled.div`
    margin: ${config.sidebar.contactIconContainer.marginTopBottom}px 0;    
    height: ${config.sidebar.contactIconContainer.height}px;
    display: flex;
    flex-direction: row;    
    align-items: center;
`

const ContactIcon = styled.a`       
    margin: ${config.sidebar.contactIcon.margin}px;    
    width: ${config.sidebar.contactIcon.width}px;
    height: ${config.sidebar.contactIcon.height}px;    
    background: ${config.sidebar.contactIcon.backgroundColor};
    border-radius: ${config.sidebar.contactIcon.borderRadius}px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background: ${config.sidebar.contactIcon.hover.backgroundColor};
    }
`

const InfoContainer = styled.div``;

const InfoItem = styled.div`
    margin: ${config.sidebar.infoItem.marginTopBottom}px 0;
    font-weight: ${config.sidebar.infoItem.fontWeight};    
    &:hover {        
        color: ${config.sidebar.infoItem.hover.color};    
        cursor: pointer;
    }
`

const SubTitleContainer = styled.div`
    margin-top: ${config.sidebar.subTitleContainer.marginTop}px;
    width: 100%;
    display: flex;
    flex-direction: column;    
`

const SubTitleBox = styled.a<{ selected: boolean }>`    
    text-decoration: none; 
    color: ${props => props.selected ? config.sidebar.subTitleBox.selected.color : config.sidebar.subTitleBox.color}; 
    &:hover {
        cursor: pointer;
        color: ${config.sidebar.subTitleBox.hover.color};    
    }
    font-size: ${config.sidebar.subTitleBox.fontSize}px;
    margin: ${config.sidebar.subTitleBox.margin}px;
    font-weight: ${config.sidebar.subTitleBox.fontWeight};
`

const Footer = styled.div`
    width: 100%;
    min-height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;    
    align-items: center;    
    color: #252525;
    font-weight: normal;
`

export default function Sidebar() {
    const [currentSubTitle, setCurrentSubTitle] = useState("");
    const contactMe = [
        {
            icon: NotionIcon,
            link: "https://jhkim31.notion.site/ca96fb8c665343349ad8b5a5fb6f1c6d?pvs=4"
        },
        {
            icon: GithubIcon,
            link: "https://github.com/jhkim31"
        },
        {
            icon: GitlabIcon,
            link: "https://gitlab.com/jhkim31"
        }
    ]

    const subTitles = [
        {
            label: "INTRODUCE",
            id: "introduce"
        },
        {
            label: "EXPERIENCE",
            id: "experience"
        },
        {
            label: "TROUBLESHOOTING",
            id: "troubleshooting"
        },
        {
            label: "SKILLS",
            id: "skills"
        },
        {
            label: "EDUCATION",
            id: "education"
        },
        {
            label: "CERTIFICATE",
            id: "certificate"
        }
    ]
    const getCurrentSection = () => {
        subTitles.map(subTitle => {
            const element = document.getElementById(subTitle.id);
            const itemTopPosition = element!.offsetTop;
            const itemBottomPosition = itemTopPosition + element!.offsetHeight;

            if (window.scrollY >= itemTopPosition - 10 && window.scrollY < itemBottomPosition) {
                setCurrentSubTitle(subTitle.label);
                return;
            }
        })
    };

    useEffect(() => {
        window.addEventListener('scroll', getCurrentSection);

        return () => {
            window.removeEventListener('scroll', getCurrentSection);
        };

    })
    return (
        <SidebarWrapper>
            <SidebarContent>
                <SidebarTitle>김재현 입니다.</SidebarTitle>
                <SidebarImg src={"/assets/img/jh.jpg"}></SidebarImg>
                <ContactIconContainer>
                    {contactMe.map(contact => {
                        return <ContactIcon key={Math.random()} href={contact.link} target="_blank" >{contact.icon}</ContactIcon>
                    })}
                </ContactIconContainer>
                <InfoContainer>
                    <InfoItem title={"클릭시 복사"} onClick={() => navigator.clipboard.writeText("biz.jh.kim@gmail.com")}>
                        biz.jh.kim@gmail.com
                    </InfoItem>
                    <InfoItem title={"클릭시 복사"} onClick={() => navigator.clipboard.writeText("010-6398-0875")}>
                        010-6398-0875
                    </InfoItem>
                </InfoContainer>
                <SubTitleContainer>
                    {subTitles.map(subTitle => {
                        return <SubTitleBox key={Math.random()} href={`#${subTitle.id}`} selected={subTitle.label === currentSubTitle}>{subTitle.label}</SubTitleBox>
                    })}
                </SubTitleContainer>
            </SidebarContent>
            <Footer>
                <div >©Coptright <A href={"https://github.com/jhkim31/jhkim31.github.io"} target="_blank">jhkim31</A></div>
            </Footer>
        </SidebarWrapper>
    )
}