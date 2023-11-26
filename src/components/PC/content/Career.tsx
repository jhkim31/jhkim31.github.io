import styled from "styled-components";

const AboutmeWrapper = styled.div`
    margin-bottom: 100px;
`

const H1 = styled.h1`
    color: #22353d;
    padding-bottom: 10px;
    border-bottom: 5px solid #367DA2;;
    width: 50%;
`

const H2 = styled.h2`
    color: #367DA2;
`

const H3 = styled.h3`
    color: #54818F;
`

const ListContainer = styled.ul``
const ListItem = styled.li`
    margin:10px;
`

export default function Career() {
    const careers = [
        {
            org: "2021.01 ~   한국전자기술연구원 (KETI)",
            team: "에너지 IT 융합센터 빅데이터팀",
            works: [
                "엔드 디바이스 관리 웹 플랫폼 ThingWire 설계, 개발",
                "빅데이터 플랫폼 수집, 적재 파트 설계, 개발",
                "WoT 표준 기반 및 Multicast-DNS Node-RED 모듈 개발",
                "Lidar 센서, 라즈베리 파이를 이용한 People Counter 연구 개발",
                "웹 기반 기상데이터 시각화 설계, 개발 및 기술이전"
            ]
        }
    ]
    return (
        <AboutmeWrapper id="career" className="contents">
            <H1>CAREER</H1>
            {careers.map((career) => {
                return (
                    <div key={Math.random()}>
                        <H2>{career.org}</H2>
                        <H3>{career.team}</H3>
                        <ListContainer>
                            {career.works.map(work => {
                                return <ListItem key={Math.random()}>{work}</ListItem>
                            })}
                        </ListContainer>
                    </div>
                )
            })}
        </AboutmeWrapper>
    )
}