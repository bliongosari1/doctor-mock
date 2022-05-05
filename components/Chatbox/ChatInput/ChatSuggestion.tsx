import React from 'react';
import { PatientTags } from '../../../styles/globalStyles';
import { ChatSuggestion } from './styles';

interface Props {
    sendMessage: (arg: string, parentId: number | null, parentMessageText: string | null) => void;
}

const links = [
    {
        title: 'Hey patient',
    },
    {
        title: 'First Chat',
    },
];

export const ChatInput: React.FC<Props> = (props) => {
    const { sendMessage } = props;
    return (
        <ChatSuggestion>
            {links.map((link, idx) => (
                <PatientTags key={idx} onClick={() => sendMessage(link.title, null, null)}>
                    {link.title}
                </PatientTags>
            ))}
        </ChatSuggestion>
    );
};

export default ChatInput;
