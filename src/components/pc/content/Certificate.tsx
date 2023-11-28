import styled from 'styled-components';
import config from '@pc/config';
import { H1, H2, H3, Ul, Li } from '@pc/common';
import { useEffect, useState } from 'react';
import axiosInstance from '@api';

const CertificateWrapper = styled.div`
    margin-bottom: ${config.contentMargin}px;
`

interface ICertificate {
    title: string;
    date: string;
}

export default function Certificate() {
    const [certificates, setCertificates] = useState<ICertificate[]>([]);
    useEffect(() => {
        axiosInstance.get("/config/certificates.json")
            .then(d => setCertificates(d.data))
            .catch(e => console.error(e));        
    }, [])
    return (
        <CertificateWrapper id="certificate" className="contents">
            <H1>CERTIFICATE</H1>
            {certificates.map(certificate => {
                return (
                    <div key={Math.random()}>
                        <H2>{certificate.title}</H2>
                        <H3>{certificate.date}</H3>
                    </div>
                )
            })}
        </CertificateWrapper>
    )
}