import styled from 'styled-components';
import config from '@pc/config';
import { H1 } from '@pc/common';

const TroubleShootingWrapper = styled.div`
    margin-bottom: ${config.contentMargin}px;
`

export default function TroubleShooting() {    
    return (
        <TroubleShootingWrapper id="troubleshooting" className="contents">
            <H1>TROUBLESHOOTING</H1>            
        </TroubleShootingWrapper>
    )
}