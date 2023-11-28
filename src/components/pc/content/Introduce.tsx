import { useEffect, useState } from 'react';
import styled from 'styled-components';

import axiosInstance from '@api';
import { A, H1, Li, P, Ul } from '@pc/common';
import config from '@pc/config';
import Markdown from 'react-markdown';

const IntroduceWrapper = styled.div`
    margin-bottom: ${config.contentMargin}px;
`

export default function Introduce() {
    const [introduce, setIntroduce] = useState<string[]>([]);
    useEffect(() => {
        axiosInstance.get("/config/introduce.json")
            .then(d => setIntroduce(d.data))
            .catch(e => console.error(e));
    }, [])
    return (
        <IntroduceWrapper id="introduce" className="contents">
            <H1>INTRODUCE</H1>
            <Ul>
                {introduce.map(i => {
                    return (
                        <Li key={Math.random()}><Markdown>{i}</Markdown></Li>
                    )
                })}
            </Ul>
        </IntroduceWrapper>
    )
}