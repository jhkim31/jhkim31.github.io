import styled from 'styled-components';

import { H1, H2, H3, Ul, Li, H4 } from '@pc/common';

const ExperienceWrapper = styled.div`
    margin-bottom: 130px;
`

const ExperienceContainer = styled.div`
    margin-bottom: 50px;
`

export default function Experience() {
    const experiences = [
        {
            title: "엔드 디바이스 관리 플랫폼 ThingWire 설계, 개발",
            subtitle: "2023.04 ~ [한국전자기술연구원]",
            contents: [
                {
                    title: "개요",
                    content: [
                        "팀 내에서 사용하는 모든 엔드 디바이스 장치 (AI서버, 데이터 수집서버, IoT 장치등)를 관리하기 위한 웹 플랫폼 설계 및 개발",
                        "해당 플랫폼으로 장치(IoT)의 설정정보를 변경하거나, 장치들을 논리적으로 조직화하고 웹을 통한 SSH 접속으로 관리를 수월하게 하기 위함"
                    ]
                },
                {
                    title: "역할",
                    content: [                        
                        "외부 설치시 필요한 기능만 제공하기 위해 모든 컴포넌트를 모듈화, 외부 파일을 제공받아 동적으로 레이아웃을 구성하도록 설계 및 개발",
                        "모듈 컴포넌트간 전역 통신을 위한 상태관리 REDUX 사용",
                        "수평확장이 가능하도록 모든 상태를 외부에 저장하는 설계",
                        "수많은 Unreachable Network의 IoT 장치들과 통신하기 위한 프로토콜 설계 및 개발",
                        "웹으로 SSH접속을 하기 위한 프로토콜 설계 및 개발",
                        "웹으로 IoT 장치의 설정 정보를 변경하기 위한 프로토콜 설계 및 개발"
                    ]
                },
                {
                    title: "사용 기술",
                    content: [
                        "Typescript, Express, React, RaspberryPi, Redis, Mariadb, Docker, Kubernetes"
                    ]
                },
            ]
        },
        {
            title: "빅데이터 플랫폼 수집, 적재 파트 설계, 개발",
            subtitle: "2023.09 ~ [한국전자기술연구원]",
            contents: [
                {
                    title: "개요",
                    content: [
                        "외부 API로부터 환경 빅데이터를 수집하는 플랫폼내에서 동작하는 데이터 수집 부분, 데이터 적재 부분 설계 및 개발"
                    ]
                },
                {
                    title: "역할",
                    content: [                        
                        "API 특징에 따른 수집 정책과 수집 실패 데이터에 대한 복구 정책 설계 및 개발",

                    ]
                },
                {
                    title: "사용 기술",
                    content: [
                        "Typescript, Kafka, Redis, OpenTSDB"                        
                    ]
                },
            ]
        },
        
        {
            title: "데이터 수집 서비스 소스코드 리팩토링",
            subtitle: "2021.08 ~ 2021.10 [한국전자기술연구원]",
            contents: [
                {
                    title: "개요",
                    content: [
                        "팀 내에서 데이터 수집에 사용되는 NodeJS(Javascript) 서비스를 Typescript로 전환하고, 코드를 개선하는 작업"
                    ]
                },
                {
                    title: "역할",
                    content: [
                        "Javascript 코드를 Typescript로 전환",
                        "레거시 모듈 개선, 유지보수를 위해 코드 모듈화",
                        "데이터 수집 실패시 적당한 Retry를 통해 수집 성공률 향상"
                    ]
                },
                {
                    title: "사용 기술",
                    content: [
                        "Javascript, Typescript, Redis"                        
                    ]
                },
            ]
        },
        {
            title: "IoT 모니터링 시스템 설계, 개발",
            subtitle: "2022.02 ~ 2022.08 [한국전자기술연구원]",
            contents: [
                {
                    title: "개요",
                    content: [
                        "팀 내에서 사용하는 모든 IoT 장치들의 상태를 확인하고 위치와 데이터를 모니터링 할 수 있는 웹 서비스 설계 및 개발"                        
                    ]
                },
                {
                    title: "역할",
                    content: [                        
                        "요구사항 정리, 이를 바탕으로 프론트엔드 - 백엔드 설계, 개발",
                        "컴포넌트간 복잡한 상호작용 처리를 위해 REDUX 도입"                        
                    ]
                },
                {
                    title: "사용 기술",
                    content: [
                        "React, Redux, Typescript, Express"                        
                    ]
                },
            ]
        },        
        {
            title: "웹기반 기상데이터 시각화 GIS 서비스 설계, 구현",
            subtitle: "2021.02 ~ 2021.08 [한국전자기술연구원]",
            contents: [
                {
                    title: "개요",
                    content: [
                        "기업이 수집한 기상데이터를 웹을 통해 지도 상에 애니메이션, 히트맵으로 시각화 하는 프로젝트"
                    ]
                },
                {
                    title: "역할",
                    content: [
                        "프론트엔드에서 렌더링 속도 향상 및 데이터 전달 레이턴시를 줄이기 위해 RAW 데이터를 보간을 통한 가공처리",
                        "데이터를 빠르게 시각화 하기 위해 기업의 RAW 데이터를 가공처리 (처리속도 약 100배 향상)",
                        "데이터를 효율적으로 가져오기 위한 REST API 설계, 개발"                        
                    ]
                },
                {
                    title: "사용 기술",
                    content: [
                        "HTML, CSS, VanilaJS, Python (Flask)"                        
                    ]
                },
            ]
        },
    ]
    return (
        <ExperienceWrapper id="experience" className="contents">
            <H1>EXPERIENCE</H1>
            {experiences.map((experience) => {
                return (
                    <ExperienceContainer key={Math.random()}>
                        <H2>{experience.title}</H2>
                        <H3>{experience.subtitle}</H3>
                        {experience.contents.map(content => {
                            return (
                                <div>
                                    <H4>{content.title}</H4>
                                    <Ul>
                                        {content.content.map(work => {
                                            return <Li key={Math.random()}>{work}</Li>
                                        })}
                                    </Ul>
                                </div>
                            )
                        })}
                    </ExperienceContainer>
                )
            })}
        </ExperienceWrapper>
    )
}