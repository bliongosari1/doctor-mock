/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { convertToRaw, EditorState } from 'draft-js';
import CopyIcon from '../../../public/assets/icons/copy.svg';
import { styles, EditorButton } from './styles';
import Image from 'next/image';

export const blockStyles = [{ label: 'copy', icon: CopyIcon }];

interface Props {
    editorState: EditorState;
    toggleBlockStyle: (arg: string) => void;
}

export const CustomControls: React.FC<Props> = ({ editorState, toggleBlockStyle }) => {
    const selection = editorState.getSelection();
    const blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();

    const handleCopy = () => {
        const text = getEditorText();
        console.log(text);
        navigator?.clipboard?.writeText(text);
        // window?.clipboardData?.setData('Text', text);
    };

    const getEditorText = () => {
        const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
        const mappedBlocks = blocks.map((block) => (!block.text.trim() && '\n') || block.text);

        let newText = '';
        for (let i = 0; i < mappedBlocks.length; i++) {
            const block = mappedBlocks[i];

            // handle last block
            if (i === mappedBlocks.length - 1) {
                newText += block;
            } else {
                // otherwise we join with \n, except if the block is already a \n
                if (block === '\n') {
                    newText += block;
                } else {
                    newText += block + '\n';
                }
            }
        }
        return newText;
    };

    return (
        <div>
            {blockStyles.map((type) => (
                <EditorButton
                    style={
                        {
                            // background: type.style === blockType ?  '#f5f5f5' : 'white'
                        }
                    }
                    key={type.label}
                    onMouseDown={(e) => {
                        e.preventDefault();
                        // toggleBlockStyle(type.style);
                    }}
                >
                    <>
                        <Image src={type.icon} height={20} width={20} alt="" />
                    </>
                </EditorButton>
            ))}
        </div>
    );
};

export default CustomControls;
