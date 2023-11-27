import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { GithubIcon, GitlabIcon, NotionIcon } from '@components/PC/common/icons';
import { A } from '@pc/common';

const SidebarWrapper = styled.div`
    position: fixed;
    width: 300px;
    height: 100%;
    display: flex;    
    flex-direction: column;
    justify-content: space-between;
    background: #648BDE;
    overflow: scroll;
    color: #EDFFED;
`

const SidebarContent = styled.div`
    padding: 30px;
    width: 100%;        
    display: flex;
    flex-direction: column;    
    align-items: center;
`

const SidebarTitle = styled.div`
    width: 100%;
    margin-top: 10px;
    margin-bottom: 30px;

    font-size: 40px;    
    font-weight: 650;       
`

const SidebarImg = styled.img`
    width: 150px;        
    border-radius: 3px;
`

const ContactIconContainer = styled.div`
    margin: 20px 0;    
    height: 30px;
    display: flex;
    flex-direction: row;    
    align-items: center;
`

const ContactIcon = styled.a`       
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;    
    background: #494952;
    border-radius: 4px;
    &:hover {
        background: #262626;
    }
`

const InfoContainer = styled.div``;

const InfoItem = styled.div`
    margin: 10px 0;
    font-weight: 600;    
    &:hover {
        cursor: pointer;
        color: #151515;    
    }
`

const SubTitleContainer = styled.div`
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;    
`

const SubTitleBox = styled.a<{ selected: boolean }>`    
    text-decoration: none; 
    color: ${props => props.selected ? "#151515" : "#eee"}; 
    &:hover {
        cursor: pointer;
        color: #151515;    
    }
    font-size: 24px;
    margin: 10px;
    font-weight: 600;
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

const HR = styled.div`
    width :90%;    
    border-top: 1px solid #353535;
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