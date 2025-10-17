
import { createRoot } from "react-dom/client"
import "./main.css"
import Header from "./Header"
import Main from "./MainContent"
import Footer from "./Footer"
const root = createRoot(document.getElementById("root"))

function Page() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
}

root.render(
    <Page />
)
