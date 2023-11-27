import styled from 'styled-components';

import { H1, H2, H3, Ul, Li } from '@pc/common';

const EducationWrapper = styled.div`
    margin-bottom: 130px;
`

export default function Education() {
    const educations = [
        {   
            title: "경기대학교",
            period : "2017.03 ~ 2023.02"
        }
    ]
    return (
        <EducationWrapper id="education" className="contents">
            <H1>EDUCATION</H1>
            {educations.map(education => {
                return (
                    <div>
                        <H2>{education.title}</H2>
                        <H3>{education.period}</H3>
                    </div>
                )
            })}            
        </EducationWrapper>
    )
}