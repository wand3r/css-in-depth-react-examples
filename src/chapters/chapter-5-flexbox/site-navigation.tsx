import React, { SFC } from "react"
import "./site-navigation.scss"

const navigationLinks = [
  {
    content: "Home",
    href: "/",
  },
  {
    content: "Features",
    href: "/features",
  },
  {
    content: "Pricing",
    href: "/pricing",
  },
  {
    content: "Support",
    href: "/support",
  },
  {
    content: "About",
    href: "/about",
  },
]

type Link = typeof navigationLinks[number]

export const SiteNavigation: SFC<{ links?: Link[] }> = ({
  links = navigationLinks,
}) => (
  <ul className="site-nav">{links.map(NavLink)}</ul>
)

const NavLink: SFC<Link> = ({ href, content }) => (
  <li>
    <a href={href}>{content}</a>
  </li>
)