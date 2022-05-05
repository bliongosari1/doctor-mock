import { InputBase } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../theme';

export const styles = {};

export const SearchWrapper = styled('div')({
    display: 'flex',
});

export const HeaderSearchBar = styled(InputBase)({
    width: 511,
    height: 48,
    borderRadius: 12,
    fontSize: 16,
    marginRight: '7.5px',
    padding: '5px 5px 5px 20px',
    background: 'white',
    '&.Mui-focused': {
        border: `solid 2px ${theme.palette.primary.main}`,
        textOverflow: 'ellipsis',
    },
    '& .MuiInputBase-input': {
        color: theme.palette.text.main,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    '&:hover': {
        cursor: 'pointer',
        // border: `solid 2px ${theme.palette.primary.main}`,
    },
    '&.MuiInputBase-input': {
        '&:hover': {
            cursor: 'pointer',
        },
    },
    '::placeholder': {
        fontSize: 11,
        color: theme.palette.text.tertiary,
    },
});

export const SearchText = styled('span')({
    color: theme.palette.primary.white,
    fontSize: '16px',
    fontWeight: '700',
});

export const PageWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '5vh 100px',
    maxHeight: '90vh',
    height: '100%',
    overflow: 'scroll',
});

export const HeaderText = styled('span')({
    color: theme.palette.text.main,
    fontSize: '36px',
    lineHeight: '48px',
    fontWeight: '700',
    marginBottom: 20,
});

export const ImageWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '7.5px',
    '::hover': {
        cursor: 'pointer',
        opacity: '0.92',
    },
});

export const SearchDetailsWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
});

export const PrimaryText = styled('span')({
    fontSize: '16px',
    fontWeight: 700,
    color: theme.palette.text.primary,
});

export const SecondaryText = styled('span')({
    fontSize: '16px',
    color: theme.palette.text.secondary,
});

export const SearchCardWrapper = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    gap: '10px',
    marginTop: '15px',
});

export const NoResultWrapper = styled('div')({
    height: '60%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
});

export const NoResultMainText = styled('span')({
    fontWeight: 700,
    fontSize: '26px',
    lineHeight: '32px',
    color: theme.palette.text.primary,
    marginTop: '30px',
});

export const NoResultSecondaryText = styled('span')({
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '24px',
    color: theme.palette.text.secondary,
    marginTop: '10px',
});
