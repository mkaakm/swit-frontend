import Container from "../../shared/components/Container";
import BrandsSection from "../BrandsSection";

const PageLayout = ({children}) => {
    return (
        <>
            <Container>
                <BrandsSection />
            </Container>
            {children}
        </>
    )
}

export default PageLayout;