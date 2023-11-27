import styled from 'styled-components';

import { H1 } from '@pc/common';

const TroubleShootingWrapper = styled.div`
    margin-bottom: 130px;
`

export default function TroubleShooting() {    
    return (
        <TroubleShootingWrapper id="troubleshooting" className="contents">
            <H1>TROUBLESHOOTING</H1>            
        </TroubleShootingWrapper>
    )
}