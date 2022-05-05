import { styled } from '@mui/system';
import theme from '../../theme';

export const LeftWrapper = styled(`div`)({
    display: 'flex',
    alignItems: 'center',
});

export const NavHeaderContainer = styled(`div`)({
    height: 75,
    width: '100%',
    padding: '10px 3rem',
    background: theme.palette.background.white,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});

export const NavLink = styled(`div`)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 20px',
    fontFamily: 'Lato',
    color: '#8F9BB3',
    '&:hover': {
        cursor: 'pointer',
        opacity: '0.92',
    },
});

export const NavLinkWrapper = styled(`div`)({
    display: 'flex',
    marginLeft: '15px',
});

export const NavText = styled(`span`)({
    marginLeft: '10px',
});

export const ImageWrapper = styled(`div`)({
    display: 'flex',
    '&:hover': {
        cursor: 'pointer',
        opacity: '0.92',
    },
});
