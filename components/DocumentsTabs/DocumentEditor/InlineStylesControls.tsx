import React from 'react';
import BoldIcon from '../../../public/assets/icons/bold.svg';
import ItalicIcon from '../../../public/assets/icons/italic.svg';
import UnderlineIcon from '../../../public/assets/icons/underline.svg';
import { EditorButton } from './styles';
import { DraftInlineStyle } from 'draft-js';
import Image from 'next/image';

export const inlineStyles = [
    { label: 'B', icon: BoldIcon, style: 'BOLD' },
    { label: 'I', icon: ItalicIcon, style: 'ITALIC' },
    { label: 'U', icon: UnderlineIcon, style: 'UNDERLINE' },
];

interface Props {
    currentInlineStyle: DraftInlineStyle;
    toggleInlineStyle: (arg: string) => void;
}

const InlineStyleControls: React.FC<Props> = ({ currentInlineStyle, toggleInlineStyle }) => {
    return (
        <div>
            {inlineStyles.map((type) => (
                <EditorButton
                    style={{
                        background: currentInlineStyle.has(type.style) ? '#f5f5f5' : 'white',
                    }}
                    key={type.label}
                    onMouseDown={(e) => {
                        e.preventDefault();
                        toggleInlineStyle(type.style);
                    }}
                >
                    <>
                        <Image src={type.icon} height={17} width={17} alt="" />
                    </>
                </EditorButton>
            ))}
        </div>
    );
};

export default InlineStyleControls;
