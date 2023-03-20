import { Component } from 'react'
import ReactDOM from 'react-dom'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import clsx from 'clsx'
import { portalModalStyles } from './styles'

class RightSideModal extends Component {
  modalRoot = document.createElement('div')
  body = document.body

  componentDidMount() {
    document.body.appendChild(this.modalRoot)
    this.body.style.overflow = 'hidden'
    document.addEventListener('keydown', this.listenerFunction, false)
  }

  componentWillUnmount() {
    document.body.removeChild(this.modalRoot)
    this.body.style.overflow = ''
    document.removeEventListener('keydown', this.listenerFunction, false)
  }

  listenerFunction = event => {
    if (event.keyCode === 27) {
      this.props.onClose()
    }
    if (event.keyCode === 13) {
      this.props.onSubmit && this.props.onSubmit(event)
    }
  }

  render() {
    const {
      modalRoot,
      props: {
        children,
        className,
        onClose,
        closeButton = true,
        title,
        subTitle,
        icon,
        isConfirmModal,
        size = 'small'
      }
    } = this

    const classes = portalModalStyles()

    const cn = clsx(classes.rightModal, className, {
      [classes.small]: size === 'small',
      [classes.middle]: size === 'middle',
      [classes.large]: size === 'large',
      [classes.left]: size === 'left',
      [classes.right]: size === 'right'
    })



    const contentCN = isConfirmModal
      ? { ...classes.modalContent, ...classes.modalConfirmContent }
      : { ...classes.modalContent, ...classes.modalRightFormContent }


    return ReactDOM.createPortal(
      <>
        <div style={classes.right}>
          {title && !isConfirmModal ? (
            <div style={classes.rightModalTitle}>
              <div style={classes.modalHeaderIcon}>{icon}</div>
              <span style={classes.modalHeaderTitle}>{title}</span>
            </div>
          ) : null}
          <div style={contentCN}>{children}</div>
          {closeButton && (
            <IconButton style={classes.iconButton} onClick={onClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          )}
        </div>
        <div style={classes.backdrop} onClick={onClose} />
      </>,
      modalRoot
    )
  }
}

export default RightSideModal