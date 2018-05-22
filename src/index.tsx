import React from "react"
import ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"
import { Default as App } from "./chapters/chapter-7-position"

const render = (Component: React.ComponentType) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("app"),
  )
}

render(App)

if (module.hot) {
  module.hot.accept(() => {
    render(App)
  })
}
