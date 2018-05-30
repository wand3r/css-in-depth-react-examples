import React, { Component, SFC } from "react"
import { NewsletterSignUpModalDialog } from "./newsletters-signup-modal-dialog"
import "./wombat-coffee-page.scss"
import { DropDown, DropDownProps } from "./drop-down"

type WombatCoffeePageProps = {}

type WombatCoffeePageState = {
  isNewsletterDialogOpen: boolean
  selectedNavigationLink: DropDownProps["selected"]
}

export class WombatCoffeePage extends Component<
  WombatCoffeePageProps,
  WombatCoffeePageState
> {
  state = { isNewsletterDialogOpen: false, selectedNavigationLink: undefined }

  toggleNewsletterDialog = (open: boolean) => {
    this.setState({ isNewsletterDialogOpen: open })
  }

  selectNavigationLink: DropDownProps["onSelect"] = (
    selectedNavigationLink,
  ) => {
    this.setState({ selectedNavigationLink })
  }

  render() {
    const { isNewsletterDialogOpen, selectedNavigationLink } = this.state
    return (
      <>
        <header className="top-banner">
          <div className="top-banner-inner">
            <p>
              Find out what's going on at Wombat Coffee each month. Sign up for
              our newsletter:
              <button onClick={() => this.toggleNewsletterDialog(true)}>
                Sign up
              </button>
            </p>
            <NewsletterSignUpModalDialog
              isOpen={isNewsletterDialogOpen}
              onClose={() => this.toggleNewsletterDialog(false)}
            />
          </div>
        </header>
        <div className="main-container">
          <main className="col-main">
            <NavigationDropDown
              selected={selectedNavigationLink}
              onSelect={this.selectNavigationLink}
            />
            <h1>Wombat Coffee Roasters</h1>
          </main>
          <aside className="col-sidebar" />
        </div>
        <div id="modal-container" />
      </>
    )
  }
}

const navigationLinks = [
  { url: "/", title: "Home" },
  { url: "/coffees", title: "Coffees" },
  { url: "/brewers", title: "Brewers" },
  { url: "/specials", title: "Specials" },
  { url: "/about", title: "About us" },
]

const NavigationDropDown: SFC<Pick<DropDownProps, "selected" | "onSelect">> = ({
  selected = navigationLinks[0],
  onSelect,
}) => (
  <nav>
    <DropDown options={navigationLinks} {...{ selected, onSelect }} />
  </nav>
)
