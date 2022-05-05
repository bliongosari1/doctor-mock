import { InputBase, Button } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../../theme';

export const styles = {};

export const ChatInputWrapper = styled(`div`)({
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '24px 24px 0px 0px',
    boxShadow: '0px 2px 15px 2px rgba(178, 187, 192, 0.3)',
    width: '100%',
    // minHeight: '95px',
    justifyContent: 'space-between',
    padding: '15px 10px 10px',
});

export const MainChatInput = styled(`div`)({
    display: 'flex',
    padding: '0px 0px 10px 7.5px',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'start',
});

export const ChatSuggestion = styled(`div`)({
    display: 'flex',
    width: '100%',
});

export const AddAttachmentsBtn = styled(`div`)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '32px',
    width: '32px',
    padding: 0,
    marginRight: '12px',
    background: theme.palette.background.main,
    borderRadius: '50%',
    '&:hover': {
        background: `${theme.palette.background.main}CC`,
        cursor: 'pointer',
    },
});

export const Chatbox = styled(`div`)({});

export const ChatInputBar = styled(InputBase)((props: { readOnly: boolean }) => ({
    minHeight: 48,
    borderRadius: 24,
    fontSize: 14,
    padding: '5px 10px 5px 15px',
    background: '#F7F9FC',
    '&.MuiInputBase-root': {
        justifyContent: 'space-between',
        width: props.readOnly ? 'calc(100% - 40px)' : '100%',
    },
    '& .MuiInputBase-input': {
        width: props.readOnly ? '1px' : '90%',
    },
    '&.Mui-focused': {
        border: 'solid 2px #4a84ff',
    },
    '&::placeholder': {
        fontSize: 16,
    },
}));

export const SendBtn = styled(`div`)({
    height: '34px',
    width: '34px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.palette.primary.main,
    '&:hover': {
        opacity: 0.92,
        cursor: 'pointer',
    },
});

export const ChatReplyBox = styled('div')({
    padding: '2px 10px 15px',
    display: 'flex',
    justifyContent: 'space-between',
});

export const ChatReplyMain = styled('div')({
    display: 'flex',
    flexDirection: 'column',
});

export const ChatReplyTo = styled('span')({
    fontSize: '12px',
});

export const ChatReplyMessage = styled('span')({
    fontSize: '12px',
    lineHeight: '16px',
    color: theme.palette.text.secondary,
});

export const Line = styled('div')({
    height: '100%',
    display: 'flex',
    width: '3px',
    minWidth: '3px',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '16px',
    marginRight: '10px',
});

export const ChatReplyWrapper = styled('div')({
    display: 'flex',
    maxWidth: '90%',
});

export const ExitWrapper = styled('div')({
    alignItems: 'start',
    '&:hover': {
        opacity: 0.92,
        cursor: 'pointer',
    },
});

export const DocumentsWrapper = styled('div')({
    alignItems: 'start',
    '&:hover': {
        opacity: 0.92,
        cursor: 'pointer',
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
    maxWidth: '150px',
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
