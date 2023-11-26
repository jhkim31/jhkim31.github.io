import styled from "styled-components"
import Aboutme from "@components/PC/content/Aboutme"
import Career from "../content/Career"
import Skills from "@components/PC/content/Skills"

const BodyWrapper = styled.div`        
    width: 100%;      
    display: flex;       
    height: 2000px;
    justify-content: center;    
`

const Sidebar = styled.div`
    width: 300px;
`

const BodyContainer = styled.div`
    width: 700px;    
    padding: 30px;
`

export default function Content() {
    return (
        <BodyWrapper>    
            <Sidebar />
            <BodyContainer>
                <Aboutme />
                <Career />
                <Skills />                                
            </BodyContainer>
        </BodyWrapper>
    )
}