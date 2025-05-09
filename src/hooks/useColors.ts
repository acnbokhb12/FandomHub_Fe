import { useTheme } from "@mui/material/styles";
import { tokens } from "../theme"; 

export const useColors = () => {
  const theme = useTheme();
  return tokens(theme.palette.mode);
};
