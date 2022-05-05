import React, { useEffect, useRef } from 'react';
import { ChatInputWrapper } from './styles';
import DoctorMessage from './DoctorMessage';
import PatientMessage from './PatientMessage';
import { Patient } from '../../../types/api';
import { Message } from '../../../types/index';
import { Loading } from '../../Loading';

type MessageType = Message;

interface Props {
    small?: boolean;
    messages: MessageType[] | null;
    patient: Patient;
    setCurReply: (arg: MessageType | null | undefined) => void;
}

const USER_ID = 'brandon-test';

export const ChatMessages: React.FC<Props> = (props) => {
    const { patient, messages, setCurReply, small = false } = props;

    const bottomRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        scrollToBottom();
        console.log(messages);
    }, [messages]);

    const scrollToBottom = () => {
        bottomRef?.current?.scrollIntoView({});
    };

    if (!messages || messages.length === 0) {
        return (
            <ChatInputWrapper style={{ height: small ? 'unset' : '100vh', minHeight: '150px' }}>
                <Loading />
            </ChatInputWrapper>
        );
    }

    return (
        <ChatInputWrapper style={{ height: small ? 'unset' : '100vh' }}>
            {messages?.map((chat, index: number) => (
                <>
                    {chat?._sender?.userId !== USER_ID ? (
                        <PatientMessage
                            patient={patient}
                            index={index}
                            chat={chat}
                            messages={messages}
                            setCurReply={setCurReply}
                        />
                    ) : (
                        <DoctorMessage patient={patient} index={index} chat={chat} messages={messages} />
                    )}
                </>
            ))}
            <div ref={bottomRef} />
        </ChatInputWrapper>
    );
};

export default ChatMessages;
