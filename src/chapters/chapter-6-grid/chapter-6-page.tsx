import React from "react"
import "./chapter-6-page.scss"
import { SiteNavigation } from "./site-navigation"
import { MainContent } from "./main-content"
import { LoginTile } from "./login-tile"
import { PriceTile } from "./price-tile"

export const Chapter6Page = () => (
  <>
    <header>
      <h1 className="page-heading">Ink</h1>
    </header>
    <SiteNavigation />
    <MainContent />
    <LoginTile className="sidebar-top" />
    <PriceTile className="sidebar-bottom" />
  </>
)
