import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { withStyles } from '@material-ui/core'

import { actionButtonStyles } from './styles'

const ActionButton = ({ handleClick, title = '', icon, ...props }) => {
  const { btnText, hideBtnText, ...restClasses } = actionButtonStyles()

  return (
    <Button
      classes={restClasses}
      startIcon={icon ? icon : <AddIcon />}
      onClick={handleClick}
      {...props}
    >
      <span className={title ? btnText : hideBtnText}>{title}</span>
    </Button>
  )
}

export default ActionButton
