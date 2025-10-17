import "./Header.css"
import logo from "../assets/Globe.png"
export default function Header(){
    return (
        <header className="header">
        <img src={logo} alt="Travel logo"/>
        <h1 className="title">my travel journal.</h1>
        </header>
    )
}