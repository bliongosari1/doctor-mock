import React from 'react';
import LeftAlignIcon from '../../../public/assets/icons/alignLeft.svg';
import CenterAlignIcon from '../../../public/assets/icons/alignCenter.svg';
import OrderedListIcon from '../../../public/assets/icons/orderedList.svg';
import UnorderedListIcon from '../../../public/assets/icons/unorderedList.svg';
import Image from 'next/image';
import { EditorState } from 'draft-js';
import { EditorButton } from './styles';

export const blockStyles = [
    { label: 'left', icon: LeftAlignIcon, style: 'left' },
    { label: 'center', icon: CenterAlignIcon, style: 'center' },
    //   { label: 'right', style: 'right' },
    { label: 'ul', icon: UnorderedListIcon, style: 'unordered-list-item' },
    { label: 'li', icon: OrderedListIcon, style: 'ordered-list-item' },
];

interface Props {
    editorState: EditorState;
    toggleBlockStyle: (arg: string) => void;
}

export const BlockStylesControls: React.FC<Props> = ({ editorState, toggleBlockStyle }) => {
    const selection = editorState.getSelection();
    const blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();

    return (
        <div>
            {blockStyles.map((type) => (
                <EditorButton
                    style={{
                        background: type.style === blockType ? '#f5f5f5' : 'white',
                    }}
                    key={type.label}
                    onMouseDown={(e) => {
                        e.preventDefault();
                        toggleBlockStyle(type.style);
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

export default BlockStylesControls;
