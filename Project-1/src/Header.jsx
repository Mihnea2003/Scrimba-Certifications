import logo from "./assets/react-logo.png"
export default function Header(){
  return (
  <header className="header">
    <img src={logo} width ="40px" alt="react logo"/>
      <nav>
        <ul className="nav-ul">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}