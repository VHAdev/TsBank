import { Footer } from "./Footer"
import { Header } from "./Header/Header"

export const Layout = ({ children}: any) => {   //tipagem feita FORA do objeto     
    return(
        <>
        <Header />
        { children }
        <Footer />
        </>
    )
}