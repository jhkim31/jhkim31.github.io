import styled from 'styled-components';
import config from '@pc/config';
import { H1, H2, H3, Ul, Li } from '@pc/common';

const ProjectWrapper = styled.div`
    margin-bottom: ${config.contentMargin}px;
`

export default function Project() {
    const projects = [
        {
            title: "",
            subTitle: "",

        }
    ]
    return (
        <ProjectWrapper id="project" className="contents^">
            <H1>PROJECT</H1>
        </ProjectWrapper>
    )
}