import React from "react"
import "./chapter-5-page.scss"
import { SiteNavigation } from "./site-navigation"
import { MainContent } from "./main-content"
import { LoginTile } from "./login-tile"
import { PriceTile } from "./price-tile"

export const Chapter5Page = () => (
  <>
    <header>
      <h1>Ink</h1>
    </header>
    <nav>
      <SiteNavigation />
    </nav>
    <main className="flex">
      <div className="column-main">
        <MainContent />
      </div>
      <div className="column-sidebar">
        <LoginTile />
        <PriceTile />
      </div>
    </main>
  </>
)
