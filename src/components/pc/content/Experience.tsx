import styled from 'styled-components';
import config from '@pc/config';
import { H1, H2, H3, Ul, Li, H4 } from '@pc/common';
import { useEffect, useState } from 'react';
import axiosInstance from '@api';
import Markdown from "react-markdown";

const ExperienceWrapper = styled.div`
    margin-bottom: ${config.contentMargin}px;
`

const ExperienceContainer = styled.div`
    margin-bottom: ${config.experience.contentMargin}px;
`
interface IContent {
    title: string;
    content: string[];
}
interface IExperience {
    title: string;
    subtitle: string;
    contents: IContent[];
}

export default function Experience() {
    const [experiences, setExperiences] = useState<IExperience[]>([]); 
    useEffect(() => {
        axiosInstance.get("/config/experiences.json")
            .then(d => setExperiences(d.data))
            .catch(e => console.error(e));        
    }, [])
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
                                <div key={Math.random()}>
                                    <H4>{content.title}</H4>
                                    <Ul>
                                        {content.content.map(work => {
                                            return <Li key={Math.random()}><Markdown>{work}</Markdown></Li>
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