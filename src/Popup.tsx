import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Itemtype } from "./ComponentTypes";

type PopupProps = {
  alert: boolean;
  onClose: () => void;
  gstFree: string;
  scannedItem: Itemtype;
};

const Popup = (props: PopupProps) => {
  const { alert, onClose, gstFree, scannedItem } = props;
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
            {`Product category:${scannedItem.category}`}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            {`Product title:${scannedItem.title}`}
          </DialogContentText>
          <DialogContentText
            id="alert-dialog-description"
            style={{ color: "Green" }}
          >
            {gstFree}
          </DialogContentText>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default Popup;
