import styled from "styled-components";
import config from '@pc/config';

const H1 = styled.h1`
    color: ${config.H1.color};
    padding: ${config.H1.paddingTopBottom}px 0;
    border-bottom: ${config.H1.borderBottom};
    width: ${config.H1.width}%;
    margin-bottom: ${config.H1.marginBottom}px;
`

export default H1;


