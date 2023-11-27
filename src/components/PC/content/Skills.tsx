import styled from "styled-components";
import { H1 } from "../common";

const SkillsWrapper = styled.div`

`

const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

const SkillItem = styled.div`        
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`

const SkillTitle = styled.h3`
    display: flex;
    
    align-items: center;
    color: #367DA2;   
    font-size: 1.3em; 
`

const SkillList = styled.ul`
    padding: 0;
`

const SkillListItem = styled.li`
    display: flex;
    
    align-items: center;    
    margin: 10px;
    color: #333;
`


export default function Skills() {
    const skills = [
        {
            title: "Language",
            list: [
                "Javascript",
                "Typescript",
                "Python",
                "C++"
            ]
        },
        {
            title: "Back-End",
            list: [
                "NodeJS",
                "Express",
                "Python",
                "Flask"
            ]
        },
        {
            title: "Database",
            list: [
                "Mariadb, Mysql",
                "Redis, MongoDB",
                "OpenTSDB, InfluxDB"                
            ]
        },
        {
            title: "Platform",
            list: [
                "Docker",
                "Kubernetes",
                "AWS",
                "Kafka"
            ]
        },
        {
            title: "Front-End",
            list: [
                "HTML, CSS, JS",
                "React"                
            ]
        },
        {
            title: "ETC",
            list: [
                "Linux",
                "gRPC",
                "Prometheus, Grafana",
                "github-actions",
                "gitlab-pipeline"                
            ]
        }
    ]
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