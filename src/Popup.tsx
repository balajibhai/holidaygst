import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

type PopupProps = {
  alert: boolean;
  onClose: () => void;
  gstFree: string;
};

const Popup = (props: PopupProps) => {
  const { alert, onClose, gstFree } = props;
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(alert);
  }, [alert]);

  const handleClose = () => {
    onClose();
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {gstFree}
          </DialogContentText>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default Popup;
