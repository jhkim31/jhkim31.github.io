import styled from "styled-components";
import config from '@pc/config';

const H4 = styled.h4`
    margin: ${config.H4.marginTopBottom}px 0;
    margin-left: ${config.H4.marginLeft}px;
    font-size: ${config.H4.fontSize}em;
    color: ${config.H4.color};
    font-weight: ${config.H4.fontWeight};
`

export default H4;