import React from "react";
 

function NavBar() {
  const links = ["home", "about", "projects"];

  const alist=links.map(link=><a key={link} href={`#${link}`}>{link}</a>)
  
  return <nav>{alist}</nav>;

}

export default NavBar;
