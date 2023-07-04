import Container from "@/components/layout/Container"
import Footer from "@/components/layout/Footer"


const layout = ({ children }) => {
    return (
        <div>
            <Container>
                {children}
                <Footer />
            </Container>
        </div>
    )
}

export default layout