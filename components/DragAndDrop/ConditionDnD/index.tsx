import React, { useState } from 'react';
import {
    DragDropContext,
    Droppable,
    Draggable,
    DropResult,
    DroppableProvided,
    DroppableStateSnapshot,
    DraggableProvided,
    DraggableStateSnapshot,
    DraggingStyle,
    NotDraggingStyle,
} from 'react-beautiful-dnd';
import DnDIcon from '../../../public/assets/icons/dnd.svg';
import BlueCrossIcon from '../../../public/assets/icons/dark_cross.svg';
import MedHxIcon from '../../../public/assets/icons/condition.svg';
import TickIcon from '../../../public/assets/icons/tick_fill.svg';
import MaybeIcon from '../../../public/assets/icons/maybe.svg';
import InvestigationIcon from '../../../public/assets/icons/investigation.svg';
import DevelopmentIcon from '../../../public/assets/icons/development.svg';
import Image from 'next/image';
import { FlexDivider, ItemText, ItemWrapper, DeleteBtnWrapper } from './styles';
import { Select } from '../../Custom/Select';

const likelihoodOptions = [
    {
        label: 'Probable',
        icon: MaybeIcon,
    },
    {
        label: 'Confirmed',
        icon: TickIcon,
    },
    {
        label: 'Existing condition',
        icon: MedHxIcon,
    },
];

const statusOptions = [
    {
        label: 'Investigated',
        icon: InvestigationIcon,
    },
    {
        label: 'SX Development',
        icon: DevelopmentIcon,
    },
];

const getItemStyle = (isDragging: boolean, draggableStyle?: DraggingStyle | NotDraggingStyle | undefined) => ({
    // userSelect: 'none',
    ...draggableStyle,
    top: 'auto !important',
    left: 'auto !important',
    marginBottom: '10px',
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getListStyle = (isDraggingOver: boolean) => ({
    width: '100%',
    maxHeight: '400px',
    overflow: 'scroll',
});

interface Props<T> {
    selectedList?: T[];
    setSelectedList: (arg: T[]) => void;
    style?: React.CSSProperties;
}

type Item = {
    label: string;
};

const DragAndDrop = <T extends Item>(props: Props<T>) => {
    const { selectedList = [], setSelectedList } = props;

    const [likelihood, setLikelihood] = useState('');
    const [status, setStatus] = useState('');

    const onDragEnd = ({ destination, source }: DropResult) => {
        // dropped outside the list
        if (!destination) {
            return;
        }
        const newItems = reorder(selectedList, source.index, destination.index);
        setSelectedList([...newItems]);
    };

    const removeItem = (itemToRemove: string) => {
        const filteredList = selectedList.filter((item) => item.label !== itemToRemove);
        setSelectedList([...filteredList]);
    };

    // a little function to help us with reordering the result
    const reorder = (list: T[], startIndex: number, endIndex: number): T[] => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                    >
                        {selectedList.map((item: T, index: number) => (
                            <Draggable key={item.label.length} draggableId={`${item.label}`} index={index}>
                                {(providedDraggable: DraggableProvided, snapshotDraggable: DraggableStateSnapshot) => (
                                    <div
                                        ref={providedDraggable.innerRef}
                                        {...providedDraggable.draggableProps}
                                        {...providedDraggable.dragHandleProps}
                                        style={getItemStyle(
                                            snapshotDraggable.isDragging,
                                            providedDraggable.draggableProps.style,
                                        )}
                                    >
                                        <ItemWrapper>
                                            <FlexDivider>
                                                <Image src={DnDIcon} height={22} width={22} alt="dragIcon" />
                                                <ItemText>{item.label}</ItemText>
                                            </FlexDivider>
                                            <FlexDivider style={{ gap: '6px' }}>
                                                <Select
                                                    value={likelihood}
                                                    setValue={setLikelihood}
                                                    defaultValue="Probable"
                                                    placeholder="Likelihood"
                                                    options={likelihoodOptions}
                                                />
                                                <Select
                                                    value={status}
                                                    setValue={setStatus}
                                                    placeholder="Status if applicable"
                                                    options={statusOptions}
                                                />
                                                <DeleteBtnWrapper>
                                                    <Image
                                                        onClick={() => {
                                                            removeItem(item.label);
                                                        }}
                                                        src={BlueCrossIcon}
                                                        height={22}
                                                        width={22}
                                                        alt="deleteIcon"
                                                    />
                                                </DeleteBtnWrapper>
                                            </FlexDivider>
                                        </ItemWrapper>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default DragAndDrop;
