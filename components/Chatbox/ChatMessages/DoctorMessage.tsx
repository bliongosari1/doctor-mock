import React from 'react';
import Image from 'next/image';
import {
    ChatMessageOutgoing,
    ChatTimeOutgoing,
    OutgoingWrapper,
    ChatOutgoingWrapper,
    ChatOutgoingReply,
    ChatOutgoingReplyMessage,
    DocumentIconWrapper,
    FileMessageWrapper,
    FileMessageText,
    MessageText,
} from './styles';
import { Patient } from '../../../types/api';
import ForwardIcon from '../../../public/assets/icons/forward.svg';
import DocumentIcon from '../../../public/assets/icons/document_filled.svg';
import { Message } from '../../../types/index';

type MessageType = Message;

interface Props {
    patient: Patient;
    index: number;
    messages: MessageType[];
    chat: MessageType;
}

const USER_ID = 'brandon-test';

const DoctorReply: React.FC<Props> = (props) => {
    const { chat, patient } = props;
    return (
        <>
            <ChatOutgoingReplyMessage>
                <Image src={ForwardIcon} height={15} width={15} alt="replyIcon" />
                <span style={{ marginLeft: '2px' }}>You replied to {patient.patient_name.split(' ')[0]}</span>
            </ChatOutgoingReplyMessage>
            <ChatOutgoingReply
                style={{
                    padding:
                        chat.parentMessage &&
                        'url' in chat.parentMessage &&
                        chat?.parentMessage?.type?.includes('image')
                            ? '4px'
                            : '8px 16px 8px 16px',
                }}
            >
                {chat.parentMessage && 'url' in chat.parentMessage && chat?.parentMessage?.url ? (
                    chat?.parentMessage?.type?.includes('image') ? (
                        // Images
                        <img
                            src={chat?.parentMessage?.url}
                            alt=""
                            style={{
                                borderRadius: '24px 30px 30px 0px',
                                maxHeight: '160px',
                                maxWidth: '160px',
                            }}
                        />
                    ) : (
                        // Files
                        <FileMessageWrapper>
                            <DocumentIconWrapper style={{ background: 'none' }}>
                                <Image src={DocumentIcon} height={18} width={18} alt="documentIcon" />
                            </DocumentIconWrapper>
                            <MessageText>{chat.parentMessageText}</MessageText>
                        </FileMessageWrapper>
                    )
                ) : (
                    <MessageText>{chat.parentMessageText}</MessageText>
                )}
            </ChatOutgoingReply>
        </>
    );
};
export const DoctorMessage: React.FC<Props> = (props) => {
    const { messages, index, chat } = props;

    // useEffect(() => {
    //     console.log(messages);
    // }, [messages])

    return (
        <OutgoingWrapper>
            <ChatOutgoingWrapper>
                {chat.parentMessageText && <DoctorReply {...props} />}
                <ChatMessageOutgoing
                    style={{
                        padding: chat.url && chat?.type?.includes('image') ? '2px' : '8px 16px 8px 16px',
                    }}
                >
                    {chat.url ? (
                        chat?.type?.includes('image') ? (
                            // 'abc'
                            <img
                                src={chat.url}
                                alt={`Error in rendering ${chat.name}`}
                                style={{
                                    borderRadius: '30px 24px 0px 30px',
                                    maxHeight: '250px',
                                    maxWidth: '250px',
                                }}
                            />
                        ) : (
                            <FileMessageWrapper>
                                <DocumentIconWrapper>
                                    <Image src={DocumentIcon} height={18} width={18} alt="documentIcon" />
                                </DocumentIconWrapper>
                                <a href={chat.url} download={chat.name}>
                                    <FileMessageText>{chat.name}</FileMessageText>
                                </a>
                            </FileMessageWrapper>
                        )
                    ) : (
                        <MessageText>{chat.message ? chat.message : `Sending ${chat.name}`}</MessageText>
                    )}
                </ChatMessageOutgoing>
                {(index === messages.length - 1 || messages[index + 1]?._sender?.userId !== USER_ID) && (
                    <ChatTimeOutgoing>
                        <span>
                            {new Date(chat.createdAt).toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit',
                            })}
                        </span>
                    </ChatTimeOutgoing>
                )}
            </ChatOutgoingWrapper>
        </OutgoingWrapper>
    );
};

export default DoctorMessage;
