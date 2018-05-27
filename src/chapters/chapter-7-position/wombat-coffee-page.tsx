import React, { Component } from "react"
import { NewsletterSignUpModalDialog } from "./newsletters-signup-modal-dialog"
import "./wombat-coffee-page.scss"

type WombatCoffeePageProps = {}

type WombatCoffeePageState = { isNewsletterDialogOpen: boolean }

export class WombatCoffeePage extends Component<
  WombatCoffeePageProps,
  WombatCoffeePageState
> {
  state = { isNewsletterDialogOpen: false }

  toggleNewsletterDialog = (open: boolean) => {
    this.setState({ isNewsletterDialogOpen: open })
  }

  render() {
    const { isNewsletterDialogOpen } = this.state
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
      </>
    )
  }
}
