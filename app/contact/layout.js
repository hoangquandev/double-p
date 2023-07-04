import Container from '@/components/layout/Container'
import React from 'react'

const ContactLayout = ({ children }) => {
    return (
        <main>
            <Container>
                {children}
            </Container>

        </main>
    )
}

export default ContactLayout