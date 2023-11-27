import styled from 'styled-components';

import { H1, H2, H3, Ul, Li } from '@pc/common';

const CareerWrapper = styled.div`
    margin-bottom: 130px;
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
        <CareerWrapper id="career" className="contents">
            <H1>CAREER</H1>
            {careers.map((career) => {
                return (
                    <div key={Math.random()}>
                        <H2>{career.org}</H2>
                        <H3>{career.team}</H3>
                        <Ul>
                            {career.works.map(work => {
                                return <Li key={Math.random()}>{work}</Li>
                            })}
                        </Ul>
                    </div>
                )
            })}
        </CareerWrapper>
    )
}