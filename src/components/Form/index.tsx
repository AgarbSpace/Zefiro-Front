import Box from '@mui/material/Box'
import { SxProps } from "@mui/material";

const styles: SxProps = {
  display: "flex",
  flexDirection: "column",
};

interface Props {
  children: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export default function Form({ children, onSubmit }: Props) {
  return (
    <Box sx={styles} component="form" onSubmit={onSubmit}>
      {children}
    </Box>
  );
}
