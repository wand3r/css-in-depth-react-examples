import React, { SFC } from "react"
import ReactDOM from "react-dom"
import "./modal-dialog.scss"

export const ModalDialog: SFC<{ isOpen: boolean; onClose: () => void }> = ({
  children,
  isOpen,
  onClose,
}) => (
  <>
    {isOpen
      ? ReactDOM.createPortal(
          <div className={`modal ${isOpen ? "modal-open" : ""}`}>
            <div className="modal-backdrop" />
            <div className="modal-body">
              <button className="modal-close" onClick={onClose}>
                close
              </button>
              {children}
            </div>
          </div>,
          document.getElementById("modal-container")!,
        )
      : null}
  </>
)
