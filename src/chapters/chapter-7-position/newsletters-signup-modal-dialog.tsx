import React, { SFC } from "react"
import { ModalDialog } from "./modal-dialog";

type NewsletterSignUpModalDialogProps = { isOpen: boolean; onClose: () => void }

export const NewsletterSignUpModalDialog: SFC<
  NewsletterSignUpModalDialogProps
> = ({ isOpen, onClose }) => (
  <ModalDialog {...{ isOpen, onClose }}>
    <p>Sign up for our monthly newsletter. No spam. We promise!</p>
    <form>
      <p>
        <label htmlFor="email">Email address:</label>
        <input type="text" name="email" />
      </p>
      <p>
        <button type="submit">Submit</button>
      </p>
    </form>
  </ModalDialog>
)
