import React, { useEffect, useRef, useState } from 'react';
import { Editor, EditorState, RichUtils, ContentBlock, EditorCommand } from 'draft-js';
import InlineStyleControls from './InlineStylesControls';
import BlockStyleControls from './BlockStylesControls';
import CustomControls from './CustomControls';
import Image from 'next/image';
import ClipIcon from '../../../public/assets/icons/clip_reverse.svg';
import DocumentIcon from '../../../public/assets/icons/document_filled.svg';
import CancelIcon from '../../../public/assets/icons/cancel_white.svg';
import {
    AttachBtn,
    DocumentButtons,
    DocumentRightButtons,
    DocumentsWrapper,
    EditorWrapper,
    TextWrapper,
    FileMessageWrapper,
    FilesWrapper,
    FileMessageText,
    DocumentIconWrapper,
    CancelIconWrapper,
} from './styles';

interface Props {
    height: number;
    width: number;
}

interface FileAttachment {
    file: File;
    url: string;
}

export const DocumentEditor: React.FC<Props> = ({ height }) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [files, setFiles] = useState<FileAttachment[]>([]);

    useEffect(() => {
        // save here
    }, [editorState]);

    const editor = useRef<HTMLDivElement | null>(null);

    const focusEditor = () => {
        editor.current?.focus();
    };

    const toggleInlineStyle = (inlineStyle: string) => {
        const newState = RichUtils.toggleInlineStyle(editorState, inlineStyle);
        setEditorState(newState);
    };

    const toggleBlockStyle = (blockStyle: string) => {
        const newState = RichUtils.toggleBlockType(editorState, blockStyle);
        setEditorState(newState);
    };

    const _handleKeyCommand = (command: EditorCommand, editorState: EditorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            setEditorState(newState);
            return 'handled';
        }
        return 'not-handled';
    };

    // const handlePastedText = (text: string, html: string | undefined, editorState: EditorState) => {
    //     setEditorState(removeEditorStyles(text, editorCur))
    // };

    const getBlockStyle = (block: ContentBlock) => {
        switch (block.getType()) {
            case 'left':
                return 'align-left';
            case 'center':
                console.log('align-center');
                return 'align-center';
            case 'right':
                console.log('align-right');
                return 'align-right';
            default:
                return '';
        }
    };

    const handleChange = (filesSelected: FileList | null): void => {
        if (filesSelected) {
            const binaryData = [];
            binaryData.push(filesSelected[0]);
            const file = {
                file: filesSelected[0],
                url: window.URL.createObjectURL(new Blob(binaryData, { type: 'application/zip' })),
            };
            setFiles([...files, file]);
        }
    };

    const removeDocument = (index: number) => {
        const tempFiles = files;
        tempFiles.splice(index, 1);
        setFiles([...tempFiles]);
    };

    return (
        <EditorWrapper
            onClick={focusEditor}
            style={{ height: 'calc(100% - 7.5px)', width: 'calc(100% - 15px)', maxHeight: height - 60 }}
        >
            <DocumentButtons>
                <InlineStyleControls
                    currentInlineStyle={editorState.getCurrentInlineStyle()}
                    toggleInlineStyle={toggleInlineStyle}
                />
                <DocumentRightButtons>
                    <BlockStyleControls editorState={editorState} toggleBlockStyle={toggleBlockStyle} />
                    <CustomControls editorState={editorState} toggleBlockStyle={toggleBlockStyle} />
                </DocumentRightButtons>
            </DocumentButtons>
            <TextWrapper>
                <div ref={editor}>
                    <Editor
                        // ref={editor}
                        blockStyleFn={getBlockStyle}
                        handleKeyCommand={_handleKeyCommand}
                        // handlePastedText={handlePastedText}
                        editorState={editorState}
                        onChange={setEditorState}
                    />
                </div>
            </TextWrapper>
            <DocumentsWrapper selected={files.length > 0}>
                <input
                    color="primary"
                    type="file"
                    id="documents-icon-button-file"
                    onChange={(e) => handleChange(e.target.files)}
                    style={{ display: 'none' }}
                />
                <label htmlFor="documents-icon-button-file">
                    <AttachBtn>
                        <Image src={ClipIcon} height={22} width={22} alt="attach" />
                    </AttachBtn>
                </label>
                <FilesWrapper>
                    {files.map((document, index) => (
                        <FileMessageWrapper selected key={index}>
                            <DocumentIconWrapper selected>
                                <Image src={DocumentIcon} height={18} width={18} alt="documentIcon" />
                            </DocumentIconWrapper>
                            {/* <a href={'ab'} download="medical.png"> */}
                            <FileMessageText selected>{document.file?.name}</FileMessageText>
                            {/* </a> */}
                            <CancelIconWrapper onClick={() => removeDocument(index)}>
                                <Image src={CancelIcon} height={20} width={20} alt="cancel"></Image>
                            </CancelIconWrapper>
                        </FileMessageWrapper>
                    ))}
                </FilesWrapper>
            </DocumentsWrapper>
        </EditorWrapper>
    );
};

export default DocumentEditor;
