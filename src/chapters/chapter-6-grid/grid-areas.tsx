import React from "react"
import "./grid-areas.scss"

export const GridAreas = () => (
  <div className="grid-areas">
    <div style={{ gridArea: "left-top" }}>left top</div>
    <div style={{ gridArea: "center" }}>center</div>
    <div style={{ gridArea: "right-bottom" }}>right bottom</div>
  </div>
)
