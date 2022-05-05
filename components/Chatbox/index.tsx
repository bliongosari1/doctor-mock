import React, { useState, useEffect } from 'react';
import { ChatboxWrapper } from './styles';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import type { Patient } from '../../types/api';
import { Message } from '../../types/index';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch, RootState } from '../../store';

interface Props extends PropsFromRedux {
    small?: boolean;
    patient: Patient;
}

export const PatientChat: React.FC<Props> = (props) => {
    const { messages, loadMessages, sendMessage, init, small = false } = props;
    // const [messages, setMessages] = useState<Message[] | null>([]);
    const [curReply, setCurReply] = useState<Message | undefined | null>();

    useEffect(() => {
        init();
        loadMessages();
    }, []);

    const onMessageSubmit = async (message: string, parentId: number | null) => {
        if (message) {
            await sendMessage({ text: message, parentId: parentId });
        }
    };

    return (
        <ChatboxWrapper>
            <ChatMessages small={small} patient={props.patient} messages={messages} setCurReply={setCurReply} />
            <ChatInput
                patient={props.patient}
                sendMessage={onMessageSubmit}
                setCurReply={setCurReply}
                reply={curReply}
            />
        </ChatboxWrapper>
    );
};

const mapState = (state: RootState) => ({
    messages: state.patient.messages,
});

const mapDispatch = (dispatch: Dispatch) => ({
    init: dispatch.patient.init,
    sendMessage: dispatch.patient.sendMessage,
    loadMessages: dispatch.patient.loadMessages,
    getMessages: dispatch.patient.getMessages,
});

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(PatientChat);
