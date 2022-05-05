import { Button } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../../theme';

export const styles = {
    Appointments__Container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1.2,
        height: '100%',
        background: theme.palette.background.white,
        marginRight: 2,
    },
};

export const DocumentButtons = styled(`div`)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
    // position: 'sticky',
    // top: 0,
    // left: 0
});

export const DocumentRightButtons = styled(`div`)({
    display: 'flex',
    alignItems: 'center',
});

export const EditorWrapper = styled(`div`)({
    position: 'relative',
    border: '1px solid #E4E9F2',
    borderRadius: '16px',
    padding: '8px 8px 16px',
    height: '300px',
    width: '100%',
    overflow: 'scroll',
});

export const EditorButton = styled(Button)({
    minWidth: '25px',
    margin: '0 5px',
});

export const TextWrapper = styled(`div`)({
    padding: '0 10px',
    maxHeight: 'calc(100% - 100px)',
    overflow: 'scroll',
});

export const DocumentsWrapper = styled(`div`)((props: { selected: boolean }) => ({
    position: 'absolute',
    bottom: 0,
    height: '72px',
    margin: '0 12px',
    borderTop: props.selected ? '1px solid rgba(33, 33, 33, 0.08)' : 'unset',
    width: 'calc(100% - 35px)',
    display: 'flex',
    alignItems: 'center',
}));

export const AttachBtn = styled(`div`)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px',
    width: '40px',
    height: '40px',
    background: '#ECF6F9',
    borderRadius: '32px',
    '&:hover': {
        cursor: 'pointer',
        opacity: '0.92',
    },
});

export const FileMessageWrapper = styled(Button)((props: { selected: boolean }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'none',
    marginRight: '5px',
    maxHeight: '36.5px',
    background: props.selected ? theme.palette.primary.main : theme.palette.background.main,
    width: 'fit-content',
    padding: '6px 15px',
    borderRadius: '16px',
    '&:hover': {
        color: props.selected ? 'white' : theme.palette.text.secondary,
        backgroundColor: props.selected ? `${theme.palette.primary.main}EB` : `${theme.palette.background.main}EB`,
    },
    '&.Mui-disabled': {
        color: 'white',
        backgroundColor: `#C5CEE0`,
    },
}));

export const FileMessageText = styled('span')((props: { selected: boolean }) => ({
    color: props.selected ? 'white' : theme.palette.text.primary,
    fontSize: '14px',
    maxWidth: '100px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    '&:hover': {
        cursor: 'pointer',
        textDecoration: 'underline',
    },
}));

export const FilesWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '15px',
    maxWidth: '100%',
    overflow: 'scroll',
});

export const DocumentIconWrapper = styled('div')((props: { selected: boolean }) => ({
    background: props.selected ? 'white' : 'unset',
    width: '24px',
    height: '24px',
    minWidth: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '5px',
    marginLeft: '-5px',
    borderRadius: '8px',
}));

export const CancelIconWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '22px',
    '&:hover': {
        cursor: 'pointer',
        opacity: '0.92',
    },
});
