import { styled } from '@mui/system';
import theme from '../../../theme';

export const styles = {};

export const ChatInputWrapper = styled(`div`)({
    display: 'flex',
    width: '100%',
    height: '100vh',
    overflow: 'scroll',
    padding: '20px 17px',
    background: 'none',
    flexDirection: 'column',
});

export const OutgoingWrapper = styled('div')({
    alignSelf: 'flex-end',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    width: '100%',
    marginRight: '0',
});

// export const ChatMessageOutgoing = styled(`div`)({
//   display: 'flex',
//   boxShadow: '0px -2px 38px 4px rgba(181, 184, 191, 0.15)',
//   borderRadius: '30px 24px 0px 30px',
//   padding: '8px 16px',
//   maxWidth: '80%',
//   width: 'fit-content',
//   background: theme.palette.primary.main,
//   color: theme.palette.primary.contrastText,
//   fontSize: '16px',
//   alignSelf: 'flex-end',
//   marginBottom: '5px',
//   animation: `${messageAnimation} 0.4s`,
//   animationTimingFunction: `cubic-bezier(0, 0, 0, 0)`,
//   transform: `translateZ(0)`
// });

export const ChatMessageOutgoing = styled(`div`)`
    display: flex;
    position: relative;
    box-shadow: 0px -2px 38px 4px rgba(181, 184, 191, 0.15);
    border-radius: 30px 24px 0px 30px;
    padding: 8px 16px;
    width: fit-content;
    background: ${theme.palette.primary.main};
    color: ${theme.palette.primary.contrastText};
    font-size: 16px;
    align-self: flex-end;
    margin-bottom: 5px;
    animation: ease 3s;
    animation-timing-function: cubic-bezier(0, 0, 0, 0);
    transform: translateZ(0);
`;

export const ChatMessageIncoming = styled(`div`)({
    position: 'relative',
    display: 'flex',
    color: theme.palette.text.primary,
    boxShadow: '0px -2px 38px 4px rgba(181, 184, 191, 0.15)',
    borderRadius: '24px 30px 30px 0px',
    padding: '8px 24px 8px 16px',
    marginBottom: '5px',
    fontSize: '16px',
    width: 'fit-content',
    background: 'rgba(143, 155, 179, 0.16)',
    transition: 'ease 0.3s',
    '&:hover': {
        cursor: 'pointer',
    },
});

export const ChatTimeIncoming = styled(`div`)({
    display: 'flex',
    fontSize: '12px',
    width: 'fit-content',
    color: theme.palette.text.tertiary,
    marginBottom: '5px',
});

export const ChatTimeOutgoing = styled(`div`)({
    display: 'flex',
    maxWidth: '80%',
    fontSize: '12px',
    alignSelf: 'flex-end',
    width: 'fit-content',
    color: theme.palette.text.tertiary,
    marginBottom: '5px',
});

export const ChatOutgoingReply = styled(`div`)({
    position: 'relative',
    display: 'flex',
    color: theme.palette.text.secondary,
    flexDirection: 'column',
    fontWeight: '400',
    boxShadow: '0px -2px 38px 4px rgba(181, 184, 191, 0.15)',
    borderRadius: '24px 30px 30px 0px',
    padding: '8px 16px 8px 16px',
    marginBottom: '5px',
    maxWidth: '80%',
    fontSize: '12px',
    lineHeight: '16px',
    width: 'fit-content',
    background: 'rgba(143, 155, 179, 0.16)',
});

export const ChatOutgoingReplyMessage = styled(`div`)({
    display: 'flex',
    color: theme.palette.text.tertiary,
    fontSize: '12px',
    marginTop: '10px',
    marginBottom: '5px',
    alignSelf: 'flex-end',
});

export const ChatIngoingReply = styled(`div`)({
    position: 'relative',
    display: 'flex',
    color: theme.palette.primary.contrastText,
    fontWeight: '400',
    boxShadow: '0px -2px 38px 4px rgba(181, 184, 191, 0.15)',
    borderRadius: '30px 24px 0px 30px',
    padding: '8px 16px 8px 16px',
    marginBottom: '5px',
    maxWidth: '80%',
    fontSize: '12px',
    lineHeight: '16px',
    width: 'fit-content',
    background: theme.palette.primary.main,
    alignSelf: 'flex-end',
});

export const ChatIngoingReplyMessage = styled(`div`)({
    display: 'flex',
    color: theme.palette.text.tertiary,
    fontSize: '12px',
    width: '100%',
    marginTop: '10px',
    marginBottom: '5px',
    alignSelf: 'flex-end',
});

export const ChatOutgoingWrapper = styled(`div`)({
    display: 'flex',
    alignSelf: 'flex-end',
    maxWidth: '80%',
    flexDirection: 'column',
});

export const Chatbox = styled(`div`)({});

export const ReplyBtn = styled(`div`)({
    position: 'absolute',
    width: '30px',
    height: '100%',
    right: 0,
    top: -3,
    opacity: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    transition: '0.5 ease',
    //   '&:hover': {
    //     opacity: 1,
    //     cursor: 'pointer'
    // },
});

export const PatientChatWrapper = styled(`div`)({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
});

export const ImageWrapper = styled(`div`)({
    borderRadius: '16px',
});

export const FlexContainer = styled(`div`)({
    alignItems: 'start',
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '90%',
    flexDirection: 'column',
});

export const DocumentIconWrapper = styled('div')({
    background: 'white',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '5px',
    marginLeft: '-5px',
    borderRadius: '8px',
});

export const FileMessageWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
});

export const FileMessageText = styled('span')({
    textDecoration: 'underline',
    '&:hover': {
        cursor: 'pointer',
    },
});

export const MessageText = styled('span')({
    whiteSpace: 'pre-wrap',
});
