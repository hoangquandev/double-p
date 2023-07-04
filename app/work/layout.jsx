import Container from "@/components/layout/Container"
import Footer from "@/components/layout/Footer"


const layoutWork = ({ children }) => {
    return (
        <div>
            <Container>
                {children}
                <Footer />
            </Container>
        </div>
    )
}

export default layoutWork