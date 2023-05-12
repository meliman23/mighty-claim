import React  from 'react';




const Nav = () => {
  const scrollToExp = () => {
    const section = document.getElementById('exp');
    section.scrollIntoView({ behavior: 'smooth' });

  };
  const scrollToContact = () => {
    const section = document.getElementById('contact');
    section.scrollIntoView({ behavior: 'smooth' });}

  return (
    <nav>
  <div class="container">

    <div class="logo">Mighty Claim</div>

    <ul class="menu">  
      <li>
        <a href="#exp" onClick={scrollToExp}>Experience</a>
        </li>
      <li>
        <a href="#contact" onClick={scrollToContact}>Contact</a>
        </li>
    </ul>
  </div>
</nav>

  )
}
export default Nav