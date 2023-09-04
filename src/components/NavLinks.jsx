export default function NavLinks() {
 const lists = [
    {
      href: "#",
      link: "home"
    },
    {
      href: "#services",
      link: "services"
    },
    {
      href: "#design-build",
      link: "design build"
    },
    {
      href: "#portfolio",
      link: "portfolio"
    },
    {
      href: "#process",
      link: "process"
    },
    {
      href: "#contact",
      link: "contact"
    },
 ]
  return (
    <>
        {
          lists.map((list) => (
            <li className="listItem" key={list.href}>
                <a href={list.href} className='listLink capitalize'>{list.link}</a>
            </li>
          ))
        }
    </>
  )
}
