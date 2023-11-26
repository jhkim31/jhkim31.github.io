import styled from "styled-components";

const SkillsWrapper = styled.div`

`

const TitleImg = styled.img`
    width: 100px;
    height: 100px;
`

const H1 = styled.h1`
    color: #22353d;
`

export default function Skills() {
    return (
        <SkillsWrapper id="skills" className="contents">
            <H1>SKILLS</H1>                        
        </SkillsWrapper>
    )
}