function NavBar() {
  let githubUrl = "https://github.com/KevinikaL"

  return (
    <nav>
      <ul>
        <li><strong>Kevinika</strong></li>
      </ul>

      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href={githubUrl}>GitHub</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar