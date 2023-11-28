import { useState, useEffect } from 'react';
import styled from 'styled-components';
import config from '@pc/config';
import { H1, H2, H3, H4, Ul, Li } from '@pc/common';
import axiosInstance from '@api';

const EducationWrapper = styled.div`
    margin-bottom: ${config.contentMargin}px;
`

interface IEducation {
    title: string;
    period: string;
    contents : string[];
}
export default function Education() {
    const [educations, setEducations] = useState<IEducation[]>([]);
    useEffect(() => {
        axiosInstance.get("/config/educations.json")
            .then(d => setEducations(d.data))
            .catch(e => console.error(e));        
    }, [])
    return (
        <EducationWrapper id="education" className="contents">
            <H1>EDUCATION</H1>
            {educations.map(education => {
                return (
                    <div key={Math.random()}>
                        <H2>{education.title}</H2>                        
                        <H3>{education.period}</H3>
                        <Ul>
                            {education.contents.map(content => {
                                return <Li key={Math.random()}>{content}</Li>
                            })}
                        </Ul>
                    </div>
                )
            })}            
        </EducationWrapper>
    )
}