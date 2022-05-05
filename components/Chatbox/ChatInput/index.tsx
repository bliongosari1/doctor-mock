import React, { useState } from 'react';
import Image from 'next/image';
import PlusIcon from '../../../public/assets/icons/plus_lg.svg';
import {
    ChatInputWrapper,
    MainChatInput,
    AddAttachmentsBtn,
    ChatInputBar,
    SendBtn,
    FileMessageWrapper,
    FileMessageText,
    DocumentIconWrapper,
    CancelIconWrapper,
} from './styles';
import type { Patient } from '../../../types/api';
import SendIcon from '../../../public/assets/icons/arrow-send.svg';
import CancelIcon from '../../../public/assets/icons/cancel_white.svg';
import ChatReply from './ChatReply';
import DocumentIcon from '../../../public/assets/icons/document_filled.svg';
import { Message } from '../../../types/index';
import { connect } from 'react-redux';
import { Dispatch, RootState } from '../../../store';

interface Props {
    patient: Patient;
    reply: Message | null | undefined;
    sendMessage: (arg: string, parentId: number | null, parentMessageText: string | null | undefined) => void;
    setCurReply: (arg: Message | null | undefined) => void;
    sendFileMessage: (files: FileList) => void;
}

export const ChatInput: React.FC<Props> = (props) => {
    const { reply, patient, setCurReply, sendMessage, sendFileMessage } = props;
    const [value, setValue] = useState('');
    const [selectedFile, setSelectedFile] = useState<FileList>();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        if (isFilePicked && selectedFile) {
            sendFileMessage(selectedFile);
            removeDocument();
        } else if (reply) {
            if (value.trim() != '') {
                props.sendMessage(value, reply.messageId, reply.message ? reply.message : reply.name);
                setCurReply(null);
            }
        } else {
            if (value.trim() !== '') {
                setCurReply(null);
                props.sendMessage(value, null, null);
            }
        }
        setValue('');
    };

    const handleDocumentChange = (files: FileList | null): void => {
        // get local image by URL.createObjectURL(files[0])
        if (files && files.length && files[0].name) {
            setValue('');
            setSelectedFile(files);
            setIsFilePicked(true);
        }
    };

    const removeDocument = () => {
        setSelectedFile(undefined);
        setIsFilePicked(false);
    };

    return (
        <ChatInputWrapper>
            {props.reply && (
                <ChatReply patient={patient} reply={reply} sendMessage={sendMessage} setCurReply={setCurReply} />
            )}
            <MainChatInput>
                <input
                    color="primary"
                    type="file"
                    id="input-icon-button-file"
                    onChange={(e) => handleDocumentChange(e.target.files)}
                    style={{ display: 'none' }}
                />
                <label htmlFor="input-icon-button-file">
                    <AddAttachmentsBtn>
                        <>
                            <Image src={PlusIcon} height={27} width={27} />
                        </>
                    </AddAttachmentsBtn>
                </label>
                <ChatInputBar
                    fullWidth
                    multiline
                    maxRows={4}
                    onKeyPress={handleKeyPress}
                    value={value}
                    onChange={handleInputChange}
                    readOnly={isFilePicked}
                    placeholder={!isFilePicked ? 'Enter a message' : ''}
                    startAdornment={
                        isFilePicked &&
                        selectedFile && (
                            <FileMessageWrapper selected>
                                <DocumentIconWrapper selected>
                                    <Image src={DocumentIcon} height={18} width={18} alt="documentIcon" />
                                </DocumentIconWrapper>
                                {/* <a href={'ab'} download="medical.png"> */}
                                <FileMessageText selected>{selectedFile[0].name}</FileMessageText>
                                {/* </a> */}
                                <CancelIconWrapper onClick={() => removeDocument()}>
                                    <Image src={CancelIcon} height={20} width={20} alt="cancel"></Image>
                                </CancelIconWrapper>
                            </FileMessageWrapper>
                        )
                    }
                    endAdornment={
                        <SendBtn onClick={() => handleSubmit()}>
                            <Image src={SendIcon} height={16} width={16} alt="send" />
                        </SendBtn>
                    }
                />
            </MainChatInput>
            {/* <ChatSuggestion
        sendMessage={sendMessage}
      /> */}
        </ChatInputWrapper>
    );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mapState = (state: RootState) => ({});

const mapDispatch = (dispatch: Dispatch) => ({
    sendFileMessage: dispatch.patient.sendFileMessage,
});

const connector = connect(mapState, mapDispatch);

export default connector(ChatInput);
