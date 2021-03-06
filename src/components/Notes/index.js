import React, { Component } from "react";

import "./style.css";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingCopiedText: false,
      isShowingNothingToCopy: false,
    };
  }

  onCopyToClipboardClick = () => {
    if (this.props.notes.length < 1) {
      this.setState({ isShowingNothingToCopy: true }, () => {
        setTimeout(() => {
          this.setState({ isShowingNothingToCopy: false });
        }, 4000);
      });
    } else {
      navigator.clipboard.writeText(this.props.notes);
      this.setState({ isShowingCopiedText: true }, () => {
        setTimeout(() => {
          this.setState({ isShowingCopiedText: false });
        }, 4000);
      });
    }
  }

  render() {
    const { onCopyToClipboardClick } = this;
    const { notes, onNotesChange } = this.props;
    const { isShowingCopiedText, isShowingNothingToCopy } = this.state;
    return (
      <div className="notes">
        <div>
          <h1 className="app-header">Notes</h1>
        </div>
        <textarea
          type="text"
          name="notes"
          onChange={(e) => onNotesChange(e.target.value)}
          value={notes}
          placeholder="Notes"
          autoComplete="off"
          className="notes-input"
        />
        <div className="notes-copy-flex-container">
          <div className="notes-copy-inner-container" onClick={onCopyToClipboardClick}>
            <i className="notes-copy-icon fas fa-clipboard"></i>
            <p className="notes-copy-label">Copy to Clipboard</p>
          </div>
          {isShowingCopiedText && (
            <>
              {notes.length > 25 ? (
                <p className="notes-copied-text">Copied "<span>{notes.substring(0, 24) + "..."}</span>" to clipboard</p>
              ) :
              (
                <p className="notes-copied-text">Copied "<span>{notes}</span>" to clipboard</p>
                )}
            </>
          )}
          {isShowingNothingToCopy && <p className="notes-copied-text">There is nothing to copy!</p>}
        </div>
      </div>
    );
  }
}

export default Notes;