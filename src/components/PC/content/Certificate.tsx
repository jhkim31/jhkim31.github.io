import styled from 'styled-components';

import { H1, H2, H3, Ul, Li } from '@pc/common';

const CertificateWrapper = styled.div`
    margin-bottom: 130px;
`

export default function Certificate() {
    const certificates = [
        {
            title: "정보처리기사",
            date: "2023.09"
        }
    ]
    return (
        <CertificateWrapper id="certificate" className="contents">
            <H1>CERTIFICATE</H1>
            {certificates.map(certificate => {
                return (
                    <div>
                        <H2>{certificate.title}</H2>
                        <H3>{certificate.date}</H3>
                    </div>
                )
            })}
        </CertificateWrapper>
    )
}