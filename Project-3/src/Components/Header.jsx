import "./Header.css"
import logo from "../assets/Chef Claude Icon.svg"
export default function Header(){
    return (
        <header className="header">
            <img src={logo} alt="Chef Claude Icon"/>
            <h1>Chef Claude</h1>
        </header>
    )
}