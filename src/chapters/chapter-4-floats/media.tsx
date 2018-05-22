import React, { SFC } from "react"
import "./media.scss"

export type MediaProps = { title: string; description: string; imgSrc: string }

export const Media: SFC<MediaProps> = ({ title, description, imgSrc }) => (
  <div className="media">
    <img className="media-image" src={imgSrc} />
    <div className="media-body">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
)
