import { FlexAlignCenter } from '@/components/widgets/flex';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography,
} from '@mui/material';
import { FC } from 'react';

interface ConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  confirmLink?: string;
}

export const ConfirmationDialog: FC<ConfirmationDialogProps> = ({
  open,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = 'Yes',
  cancelText = 'No',
  confirmLink,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent sx={{ width: '400px' }}>
        <DialogContentText id="alert-dialog-description">
          <FlexAlignCenter>
            <img
              src="/assets/icons/question.svg"
              alt="question"
              style={{ width: '118px', height: '114px', borderRadius: '100%' }}
            />
          </FlexAlignCenter>
          <FlexAlignCenter>
            <Typography
              component="p"
              variant="body1"
              sx={{
                fontSize: '20px',
                fontWeight: 600,
                color: '#000000',
                textAlign: 'center',
                width: '300px',
              }}
            >
              {title}
            </Typography>
          </FlexAlignCenter>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ textAlign: 'center', mt: 1 }}
          >
            {description}
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 3,
          mb: 3,
        }}
      >
        {confirmLink ? (
          <Button
            LinkComponent="a"
            href={confirmLink}
            variant="outlined"
            color="primary"
            sx={{ height: '40px' }}
          >
            {confirmText}
          </Button>
        ) : (
          <Button
            variant="outlined"
            color="primary"
            onClick={onConfirm}
            sx={{ height: '40px' }}
          >
            {confirmText}
          </Button>
        )}
        <Button
          variant="contained"
          onClick={onClose}
          color="primary"
          autoFocus
          sx={{ height: '40px' }}
        >
          {cancelText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
