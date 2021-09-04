import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'

const styles = (theme: Theme) =>
createStyles({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

export interface DialogTitleProps extends WithStyles<typeof styles> {
id: string;
children: React.ReactNode;
onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
const { children, classes, onClose, ...other } = props;
return (
  <MuiDialogTitle disableTypography className={classes.root} {...other}>
    <Typography variant="h6">{children}</Typography>
    {onClose ? (
      <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
        <CloseIcon />
      </IconButton>
    ) : null}
  </MuiDialogTitle>
);
});

const DialogContent = withStyles((theme: Theme) => ({
root: {
  padding: theme.spacing(2),
},
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
root: {
  margin: 0,
  padding: theme.spacing(1),
},
}))(MuiDialogActions);

type TProps = {
  isOpened: boolean
  onClose: () => void
  contentRenderer: React.FC<any>
  titleRenderer: React.FC<any>
  actionsRenderer: React.FC<any>
  maxWidth: 'xl' | 'lg' | 'sm' | 'md' | 'xs'
  fullWidth?: boolean
}

export const Modal = ({ isOpened, onClose, titleRenderer, contentRenderer, actionsRenderer, maxWidth, fullWidth }: TProps) => {
  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={isOpened}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
    >
      <DialogTitle id="customized-dialog-title" onClose={onClose}>
        {titleRenderer({})}
      </DialogTitle>
      <DialogContent dividers>
        {contentRenderer({})}
      </DialogContent>
      <DialogActions>
        {actionsRenderer({})}
      </DialogActions>
    </Dialog>
  );
}