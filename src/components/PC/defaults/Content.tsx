import styled from "styled-components"
import Introduce from "@pc/content/Introduce"
import Skills from "@pc/content/Skills"
import Experience from "@pc/content/Experience"
import Education from "@pc/content/Education"
import Certificate from "@pc/content/Certificate"
import TroubleShooting from "@pc/content/TroubleShooting"

const BodyWrapper = styled.div`        
    width: 100%;      
    display: flex;           
    justify-content: center;        
`

const SidebarSpace = styled.div`
    width: 300px;
`

const BodyContainer = styled.div`
    width: 700px;    
    padding: 30px;
`

const WhiteSpace = styled.div`
    height: 500px;
`

export default function Content() {
    return (
        <BodyWrapper>    
            <SidebarSpace />
            <BodyContainer>
                <Introduce />
                <Experience />
                <TroubleShooting />
                <Skills />  
                <Education />                                
                <Certificate />
                <WhiteSpace />
            </BodyContainer>
        </BodyWrapper>
    )
}