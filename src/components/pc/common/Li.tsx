import styled from "styled-components";
import config from '@pc/config';

const Li = styled.li`
    margin: ${config.Li.margin}px;
    font-weight: ${config.Li.fontWeight};
    color: ${config.Li.color};
    line-height: ${config.Li.lineHeight}%;
`

export default Li;