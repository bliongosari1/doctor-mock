import { Container, Button } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../theme';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';

const blue = {
    100: '#DAECFF',
    200: '#99CCF3',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
};

const grey = {
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
};

export const styles: { [key: string]: React.CSSProperties } = {
    DashboardDetailsCallSummary__Text: {
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        color: '#667B91',
    },
    DashboardDetailsCallButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '7px 15px',
        margin: '7.5px 0',
    },
    ButtonText: {
        margin: '0 5px',
    },
    HeaderTitle: {
        fontSize: '21px',
        fontWeight: '600',
        lineHeight: '28px',
        color: theme.palette.text.primary,
    },
    HeaderWarning: {
        fontSize: '21px',
        fontWeight: '600',
        lineHeight: '28px',
        color: theme.palette.text.red,
    },
};

export const DashboardDetailsContainer = styled(Container)({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: '0px',
    '&.MuiContainer-root': {
        padding: '10px',
    },
});

export const StyledButton = styled(Button)({
    display: 'flex',
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: '10px',
    padding: '11px 10px',
    fontWeight: '400',
    fontSize: '15px',
    fontFamily: 'Lato',
    textTransform: 'none',
    '&:hover': {
        background: `${theme.palette.primary.main}E6`,
    },
});

export const SelectButton = styled(Button)({
    display: 'flex',
    background: '#E5DCFD',
    color: '#972CEE',
    borderRadius: '10px',
    padding: '17px 14px',
    fontWeight: '400',
    minWidth: '60px',
    fontSize: '16px',
    fontFamily: 'Lato',
    textTransform: 'none',
    '&:hover': {
        background: `#E5DCFDE6`,
    },
});

export const SettingsButton = styled(Button)({
    display: 'flex',
    background: 'white',
    borderRadius: '50%',
    margin: '0 5px',
    minHeight: '40px',
    maxHeight: '40px',
    minWidth: '40px',
    maxWidth: '40px',
    boxShadow: '0px 3px 20px rgba(0, 0, 0, 0.09)',
    '&:hover': {
        opacity: '0.92',
    },
});

export const StyledListbox = styled('ul')(
    `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 5px;
    margin: 10px 0;
    min-width: 320px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 0.75em;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    overflow: auto;
    outline: 0px;
    `,
);

export const StyledOption = styled(OptionUnstyled)(
    `
    list-style: none;
    padding: 8px;
    border-radius: 0.45em;
    cursor: default;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${optionUnstyledClasses.selected} {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.highlighted} {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
  
    &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.disabled} {
      color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  
    &:hover:not(.${optionUnstyledClasses.disabled}) {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
    `,
);

export const StyledPopper = styled(PopperUnstyled)`
    z-index: 1;
`;

export const Paragraph = styled('p')(
    `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    margin: 10px 0;
    color: ${theme.palette.mode === 'dark' ? grey[400] : grey[700]};
    `,
);

export const Line = styled('div')({
    height: '25px',
    width: '1px',
    background: 'rgba(255, 255, 255, 0.29)',
    borderRadius: '10px',
    margin: '0 5px',
});

export const DashboardDetailsCallSummary = styled('div')({
    display: 'flex',
    width: '100%',
    padding: '10px 7.5px 0px 14px',
    flexDirection: 'row',
    justifyContent: 'space-between',
    background: '#ECF6F9',
    borderRadius: '10px',
});

export const RedCircle = styled('div')({
    height: '10.5px',
    width: '10.5px',
    background: '#E95252',
    borderRadius: '50%',
    marginRight: '5px',
});

export const Agenda = styled('div')({
    padding: '0px 15px',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '13px',
    color: theme.palette.text.secondary,
});

export const FlexWrap = styled('div')({
    display: 'flex',
    alignItems: 'center',
});
