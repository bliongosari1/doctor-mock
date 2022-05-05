import React, { useState } from 'react';
import { CircleButton, SelectedButton } from './styles';

interface Props {
    selected?: boolean;
    setSelected?: (arg: boolean) => void;
    disabled?: boolean;
}

export const RadioButton: React.FC<Props> = (props) => {
    const [selectedLocal, setSelectedLocal] = useState(false);
    const { selected = selectedLocal, setSelected = setSelectedLocal, disabled = false } = props;

    return (
        <CircleButton
            selected={!disabled && selected}
            disabled={disabled}
            onClick={() => {
                !disabled && setSelected(true);
            }}
        >
            {selected && <SelectedButton selected={selected} />}
        </CircleButton>
    );
};

export default RadioButton;
