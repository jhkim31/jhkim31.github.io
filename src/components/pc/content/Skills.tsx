import styled from "styled-components";
import config from '@pc/config';
import { H1 } from "../common";
import { useEffect, useState } from "react";
import axiosInstance from "@api";

const SkillsWrapper = styled.div`
    margin-bottom: ${config.contentMargin}px;
`

const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

const SkillItem = styled.div`        
    display: flex;
    flex-direction: column;
    margin-bottom: ${config.skills.itemMarginBottom}px;
`

const SkillTitle = styled.h3`
    color: ${config.skills.title.color};   
    font-size: ${config.skills.title.fontSize};
    display: flex;    
    align-items: center;     
`

const SkillList = styled.ul`
    padding: ${config.skills.list.padding};
`

const SkillListItem = styled.li`
    margin: ${config.skills.list.margin}px;
    color: ${config.skills.list.color};
    display: flex;    
    align-items: center;        
`

interface ISkill {
    title: string;
    list: string[];
}
export default function Skills() {
    const [skills, setSkills] = useState<ISkill[]>([]);
    useEffect(() => {
        axiosInstance.get('/config/skills.json')
            .then(d => setSkills(d.data))
            .catch(e => console.error(e));
    }, [])
    return (
        <SkillsWrapper id="skills" className="contents">
            <H1>SKILLS</H1>
            <SkillsContainer>
                {skills.map((skill) => {
                    return (
                        <SkillItem key={Math.random()}>
                            <SkillTitle>{skill.title}</SkillTitle>
                            <SkillList>
                                {skill.list.map((skillItem) => {
                                    return <SkillListItem key={Math.random()}>{skillItem}</SkillListItem>                                    
                                })}
                                
                            </SkillList>
                        </SkillItem>
                    )
                })}                
            </SkillsContainer>
        </SkillsWrapper>
    )
}