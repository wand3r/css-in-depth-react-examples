import React, { Component } from "react"
import { ModalDialog } from "./modal-dialog"
import "./page-with-modal.scss"

type PageWithModelProps = {}

type PageWithModelState = { isNewsletterDialogOpen: boolean }

export class PageWithModel extends Component<
  PageWithModelProps,
  PageWithModelState
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
            <ModalDialog
              isOpen={isNewsletterDialogOpen}
              onClose={() => this.toggleNewsletterDialog(false)}
            />
          </div>
        </header>
      </>
    )
  }
}
