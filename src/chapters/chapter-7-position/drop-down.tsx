import React, { SFC } from "react"
import "./drop-down.scss"

export type DropDownOption = {
  url: string
  title: string
}

export type DropDownProps = {
  options: DropDownOption[]
  selected?: DropDownOption
  onSelect: (option?: DropDownOption) => void
}

export const DropDown: SFC<DropDownProps> = ({
  options,
  selected,
  onSelect,
}) => (
  <div className="dropdown">
    <div className="dropdown-label">{selected ? selected.title : ""}</div>
    <div className="dropdown-menu">
      <ul className="submenu">
        {options.map(({ url, title }, index) => (
          <li key={index}>
            <a
              href={url}
              onClick={(e) => {
                e.preventDefault()
                onSelect({ url, title })
              }}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
)
