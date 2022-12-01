import { FC } from "react";
import { Paper } from '@mui/material';

interface ILyoutProps {
  children: React.ReactElement | React.ReactNode
  minHeight?: string;
  width?: string;
  display?: string;
}

const Lyout: FC<ILyoutProps> = ({children, minHeight, width, display}) => {
  return (
    <Paper
      sx={{
        width: width,
        minHeight: minHeight,
        display: display,
        '& > :not(style)': { m: 1 },
      }}
    >
      {children}
    </Paper>
  );
};

export default Lyout;
