import Container from '@/components/layout/Container'
import Footer from '@/components/layout/Footer'
import React from 'react'

const layoutAchives = ({ children }) => {
    return (
        <div>
            <Container>
                {children}
                <Footer />
            </Container>
        </div>
    )
}

export default layoutAchives