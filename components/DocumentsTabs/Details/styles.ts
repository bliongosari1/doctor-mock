import { styled } from '@mui/system';
import theme from '../../../theme';

export const styles = {};

export const DocumentDetails = styled(`div`)({
    padding: '8px 16px',
    background: '#F7F9FC',
    borderRadius: 8,
    margin: '0px 5px',
    display: 'flex',
    // [theme.breakpoints.down('md')]: {
    //     background: 'red',
    // },
});

export const FullDetailWrapper = styled(`div`)({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflow: 'scroll',
});

export const TextDetailWrapper = styled(`div`)({
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginLeft: '-5px',
    maxHeight: '105px',
});

export const DetailTitle = styled('span')({
    fontWeight: 700,
    fontSize: 12,
    lineHeight: '17px',
    color: theme.palette.text.main,
});

export const DetailSubtitle = styled('span')({
    display: 'flex',
    fontWeight: 400,
    fontSize: 10,
    lineHeight: '14px',
    color: theme.palette.text.secondary,
});

export const DetailText = styled('span')({
    display: 'flex',
    fontWeight: 400,
    fontSize: 10,
    lineHeight: '14px',
    maxWidth: '100px',
    flexWrap: 'wrap',
    color: theme.palette.text.primary,
});

export const TwoItemsWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'row',
});

export const ColumnWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    margin: '3px 0 3px 5px',
});

export const SignatureWrapper = styled('div')({
    display: 'flex',
    marginTop: '5px',
    marginLeft: '5px',
});
