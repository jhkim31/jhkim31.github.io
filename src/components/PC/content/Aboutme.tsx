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

const P = styled.p`
    line-height: 180%;
`

export default function Aboutme() {    
    return (
        <AboutmeWrapper id="aboutme" className="contents">
            <H1>ABOUT ME</H1>            
            <P>
                웹, 앱, 클라우드, AI, IoT, 빅데이터 등 다양한 경험이 있습니다. 특히 Node (Typescript) 를 사용한 웹 개발 경험이 많습니다. 서비스의 자동화 및 서비스의 가용성을 높히기 위한 고민을 많이 하고 있습니다.
            </P>
            <P>
                문제를 해결하기 위해 고민하는것을 좋아합니다. 문제를 해결하기 위한 방안들을 제시하고, 논의를 통해 최선의 방법을 찾아나가는 의사결정 과정을 좋아합니다.
            </P>
            <P>
                새로운 기술에 대한 관심이 많아, 따로 공부하며 습득한 기술로 개인 토이 프로젝트를 진행하는것을 좋아합니다. 새로운 기술을 사용해보며 발생하는 문제들을 직접 해결해가며 성장하고 있습니다.
            </P>
        </AboutmeWrapper>
    )
}