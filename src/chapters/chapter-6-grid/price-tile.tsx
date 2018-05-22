import React, { SFC } from "react"
import "./price-tile.scss"

export const PriceTile: SFC<{ className?: string }> = ({ className = "" }) => (
  <div className={`tile centered ${className}`}>
    <small>Starting at</small>
    <Cost currency="$" dollars="20" cents="00" />
    <SignUpBtn />
  </div>
)

const Cost: SFC<{ currency: string; dollars: string; cents: string }> = ({
  currency,
  dollars,
  cents,
}) => (
  <div className="cost">
    <span className="cost-currency">{currency}</span>
    <span className="cost-dollars">{dollars}</span>
    <span className="cost-cents">.{cents}</span>
  </div>
)

const SignUpBtn = () => (
  <a className="cta-button" href="/pricing">
    Sign up
  </a>
)
