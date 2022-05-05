import React from 'react';
import Image from 'next/image';
import {
    ChatReplyBox,
    ChatReplyMain,
    ChatReplyTo,
    ChatReplyMessage,
    Line,
    ChatReplyWrapper,
    ExitWrapper,
} from './styles';
import type { Patient } from '../../../types/api';
import ExitIcon from '../../../public/assets/icons/exit.svg';
import { Message } from '../../../types/index';

interface Props {
    patient: Patient;
    reply: Message | null | undefined;
    sendMessage: (arg: string, parentId: number | null, parentMessageText: string | null) => void;
    setCurReply: (arg: Message | null | undefined) => void;
}

export const ChatInput: React.FC<Props> = (props) => {
    const { reply, patient, setCurReply } = props;
    return (
        <ChatReplyBox>
            <ChatReplyWrapper>
                <Line></Line>
                <ChatReplyMain>
                    <ChatReplyTo>Replying to {patient.patient_name.split(' ')[0]}</ChatReplyTo>
                    <ChatReplyMessage>{reply?.message ? reply?.message : reply?.name}</ChatReplyMessage>
                </ChatReplyMain>
            </ChatReplyWrapper>
            <ExitWrapper onClick={() => setCurReply(null)}>
                <Image src={ExitIcon} height={20} width={20} />
            </ExitWrapper>
        </ChatReplyBox>
    );
};

export default ChatInput;
