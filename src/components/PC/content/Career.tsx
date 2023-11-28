import { useState, useEffect } from 'react';
import styled from 'styled-components';
import config from '@pc/config';
import { H1, H2, H3, Ul, Li } from '@pc/common';
import axiosInstance from '@api';

const CareerWrapper = styled.div`
    margin-bottom: ${config.contentMargin}px;
`
interface ICareer {
    org: string;
    team: string;
    works: string[];
}

export default function Career() {
    const [careers, setCareers] = useState<ICareer[]>([]);

    useEffect(() => {
        axiosInstance.get('/config/careers.json')
            .then(d => setCareers(d.data))
            .catch(e => console.error(e))

    }, [])
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