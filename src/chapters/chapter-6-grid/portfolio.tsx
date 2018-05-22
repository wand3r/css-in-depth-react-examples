import React, { SFC } from "react"
import "./portfolio.scss"

export const Portfolio = () => (
  <div className="portfolio">
    <Photo src="images/monkey.jpg" description="monkey" featured />
    <Photo src="images/eagle.jpg" description="eagle" />
    <Photo src="images/bird.jpg" description="bird" featured />
    <Photo src="images/bear.jpg" description="bear" />
    <Photo src="images/swan.jpg" description="swan" featured />
    <Photo src="images/elephants.jpg" description="elephants" />
    <Photo src="images/owl.jpg" description="owl" />
  </div>
)

type PhotoProps = { src: string; description: string; featured?: boolean }

const Photo: SFC<PhotoProps> = ({ src, description, featured = false }) => (
  <figure className={featured ? "featured" : undefined}>
    <img src={src} alt={description} />
    <figcaption>{description}</figcaption>
  </figure>
)
