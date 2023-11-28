import styled from "styled-components";
import config from '@pc/config';
import { H1, P, Ul, Li, A } from "@pc/common";

const IntroduceWrapper = styled.div`
    margin-bottom: ${config.contentMargin}px;
`

export default function Introduce() {    

    return (
        <IntroduceWrapper id="introduce" className="contents">
            <H1>INTRODUCE</H1>        
            <Ul>
                <Li>
                    웹, 클라우드, NodeJS에 관심이 많은 주니어 개발자 입니다.
                </Li>
                <Li>
                    주로 Node(Typescript)를 사용한 웹개발과 데이터 수집, 적재를 담당했습니다.
                </Li>
                <Li>
                    기존 서비스를 더 나은 방향으로 발전시키는 방향에 대해 고민합니다.
                </Li>
                <Li>
                    인상깊었던 경험들을 <A href={"https://jhkim31.notion.site/ca96fb8c665343349ad8b5a5fb6f1c6d?pvs=4"}>기록</A>하고 있습니다.
                </Li>
                <Li>
                    새로운 기술에 대한 관심이 많아, 따로 공부하며 습득한 기술로 개인 토이 프로젝트를 진행하는것을 좋아합니다.
                </Li>                
            </Ul>            
        </IntroduceWrapper>
    )
}