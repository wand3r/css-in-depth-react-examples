import React, { SFC } from "react"
import "./modal-dialog.scss"

type ModalDialogProps = { isOpen: boolean; onClose: () => void }

export const ModalDialog: SFC<ModalDialogProps> = ({ isOpen, onClose }) =>
  isOpen ? (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-backdrop" />
      <div className="modal-body">
        <button className="modal-close" onClick={onClose}>
          close
        </button>
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
      </div>
    </div>
  ) : null
