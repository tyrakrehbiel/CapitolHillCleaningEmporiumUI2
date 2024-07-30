import { useMediaQuery, useTheme } from '@mui/material';

export const useMobile = () => useMediaQuery(useTheme().breakpoints.down('sm'));