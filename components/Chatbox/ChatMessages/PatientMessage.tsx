import React, { useState, MouseEvent } from 'react';
import Image from 'next/image';
import {
    ChatMessageIncoming,
    ChatTimeIncoming,
    ReplyBtn,
    PatientChatWrapper,
    ChatIngoingReplyMessage,
    ChatIngoingReply,
    FlexContainer,
    FileMessageWrapper,
    DocumentIconWrapper,
    FileMessageText,
    MessageText,
} from './styles';
import ReplyBtnIcon from '../../../public/assets/icons/reply.svg';
import AvatarStatus from './AvatarStatus';
import ForwardIcon from '../../../public/assets/icons/forward.svg';
import DocumentIcon from '../../../public/assets/icons/document_filled.svg';
import { Message } from '../../../types/index';
import { Patient } from '../../../types/api';

type MessageType = Message;

interface Props {
    index: number;
    messages: MessageType[];
    patient: Patient;
    chat: MessageType;
    setCurReply: (arg: MessageType | null | undefined) => void;
}

const USER_ID = 'brandon-test';

const PatientReply: React.FC<Props> = (props) => {
    const { chat, patient } = props;
    return (
        <>
            <ChatIngoingReplyMessage>
                <Image src={ForwardIcon} height={15} width={15} alt="replyIcon" />
                <span style={{ marginLeft: '2px' }}>{patient.patient_name.split(' ')[0]} replied to you</span>
            </ChatIngoingReplyMessage>
            <ChatIngoingReply
                style={{
                    padding: chat.url && chat?.type?.includes('image') ? '5px' : '8px 16px 8px 16px',
                }}
            >
                {chat.parentMessage && 'url' in chat?.parentMessage && chat?.parentMessage?.url ? (
                    chat.parentMessage &&
                    'type' in chat?.parentMessage &&
                    chat?.parentMessage?.type?.includes('image') ? (
                        <img
                            src={chat?.parentMessage.url}
                            alt=""
                            style={{
                                borderRadius: '30px 24px 0px 30px',
                                maxWidth: '160px',
                                maxHeight: '160px',
                            }}
                        />
                    ) : (
                        <FileMessageWrapper>
                            <DocumentIconWrapper>
                                <Image src={DocumentIcon} height={18} width={18} alt="documentIcon" />
                            </DocumentIconWrapper>
                            <FileMessageText>
                                {chat.parentMessage && 'name' in chat?.parentMessage && chat?.parentMessage?.name}
                            </FileMessageText>
                        </FileMessageWrapper>
                    )
                ) : (
                    <MessageText>
                        {chat.parentMessage && 'message' in chat?.parentMessage && chat?.parentMessage?.message}
                    </MessageText>
                )}
            </ChatIngoingReply>
        </>
    );
};

export const ChatMessages: React.FC<Props> = (props) => {
    const { messages, index, chat, setCurReply } = props;
    const [replyHovered, setReplyHovered] = useState(false);

    const onHoverReply = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setReplyHovered(true);
    };

    const onLeaveReply = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setReplyHovered(false);
    };

    return (
        <>
            <PatientChatWrapper>
                <FlexContainer>
                    {chat.parentMessage || (chat.parentMessageText && <PatientReply {...props} />)}
                    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AvatarStatus />
                        <ChatMessageIncoming
                            onClick={() => setCurReply(chat)}
                            onMouseOver={onHoverReply}
                            onMouseLeave={onLeaveReply}
                            style={{
                                padding:
                                    chat.url && chat?.type?.includes('image')
                                        ? replyHovered
                                            ? '5px 25px 5px 5px'
                                            : '5px 5px'
                                        : replyHovered
                                        ? '8px 30px 8px 16px'
                                        : '8px 16px 8px 16px',
                            }}
                        >
                            {chat.url ? (
                                chat?.type?.includes('image') ? (
                                    // Images
                                    <img
                                        src={chat.url}
                                        alt=""
                                        style={{
                                            borderRadius: '24px 30px 30px 0px',
                                            maxWidth: '250px',
                                            maxHeight: '250px',
                                        }}
                                    />
                                ) : (
                                    // Files
                                    <FileMessageWrapper>
                                        <DocumentIconWrapper style={{ background: 'none' }}>
                                            <Image src={DocumentIcon} height={18} width={18} alt="documentIcon" />
                                        </DocumentIconWrapper>
                                        <a href={chat.url} download={chat.name}>
                                            <FileMessageText>{chat.name}</FileMessageText>
                                        </a>
                                    </FileMessageWrapper>
                                )
                            ) : (
                                <MessageText>{chat.message}</MessageText>
                            )}

                            <ReplyBtn style={{ opacity: replyHovered ? 1 : 0 }}>
                                <div style={{ marginTop: '20%', marginRight: '5px' }}>
                                    <Image src={ReplyBtnIcon} height={15} width={15} alt="" />
                                </div>
                            </ReplyBtn>
                        </ChatMessageIncoming>
                    </div>
                </FlexContainer>
            </PatientChatWrapper>
            {/* Show time only if its the last consecutive */}
            {(index === messages.length - 1 || messages[index + 1]?._sender?.userId === USER_ID) && (
                <ChatTimeIncoming style={{ marginLeft: '50px' }}>
                    <span>
                        {new Date(chat.createdAt).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                        })}
                    </span>
                </ChatTimeIncoming>
            )}
        </>
    );
};

export default ChatMessages;
