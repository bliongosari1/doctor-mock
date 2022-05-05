import React, { useState } from 'react';
import Modal from '../Modal';
import {
    ModalTitle,
    PreviousConsultsWrapper,
    ConsultRow,
    ConsultRowDetails,
    TagsWrapper,
    ModalDate,
    ModalSeenBy,
    ModalText,
    RowLink,
    RowLinkContent,
} from '../styles';
import { Circle, PatientTags } from '../../../styles/globalStyles';
import ArrowRight from '../../public/assets/icons/arrow_right.svg';
import Image from 'next/image';
import AppointmentType from '../../AppointmentType';

interface Props {
    isToggle: boolean;
    toggle: (arg: boolean) => void;
}

const infos = [
    {
        title: 'Seen by Dr Tom Kelly',
        date: '16/2/2012',
        type: 'Video Call',
        length: '15 mins',
        tags: ['tag1', 'tag2', 'tag3'],
    },
    {
        title: 'Seen by Dr Tom Kelly',
        date: '16/2/2012',
        type: 'Video Call',
        length: '15 mins',
        tags: ['tag1', 'tag2', 'tag3'],
    },
    {
        title: 'Seen by Dr Tom Kelly',
        date: '16/2/2012',
        type: 'Voice Call',
        length: '15 mins',
        tags: ['tag1', 'tag2', 'tag3'],
    },
    {
        title: 'Seen by Dr Tom Kelly',
        date: '16/2/2012',
        type: 'Chat',
        length: '15 mins',
        tags: ['tag1', 'tag2', 'tag3'],
    },
];

export const HeidiQnA: React.FC<Props> = (props) => {
    const { isToggle = false, toggle = () => {} } = props;
    const [consultDetails, setConsultDetails] = useState<number | null>();

    return (
        <Modal isToggle={isToggle} toggle={toggle} noExitButton={typeof consultDetails === 'number'}>
            <>
                {!consultDetails && (
                    <>
                        <ModalTitle>Previous Consults</ModalTitle>
                        <PreviousConsultsWrapper>
                            {infos.map((info, index) => (
                                <div key={index}>
                                    <ConsultRow onClick={() => setConsultDetails(index)}>
                                        <AppointmentType type={info.type} length={info.length} />
                                        <ModalDate>{info.date}</ModalDate>
                                        <ModalSeenBy>{info.title}</ModalSeenBy>
                                        <TagsWrapper>
                                            {info.tags.map((tag, idx) => (
                                                <PatientTags key={idx}>{tag}</PatientTags>
                                            ))}
                                        </TagsWrapper>
                                    </ConsultRow>
                                </div>
                            ))}
                        </PreviousConsultsWrapper>
                    </>
                )}
                {typeof consultDetails === 'number' && (
                    <>
                        <ModalTitle>Consult on {infos[consultDetails].date}</ModalTitle>
                        <PreviousConsultsWrapper>
                            <ConsultRowDetails>
                                <AppointmentType
                                    type={infos[consultDetails].type}
                                    length={infos[consultDetails].length}
                                />
                                <ModalDate>{infos[consultDetails].date}</ModalDate>
                                <ModalSeenBy style={{ marginBottom: '15px' }}>
                                    {infos[consultDetails].title}
                                </ModalSeenBy>
                                <TagsWrapper style={{ marginBottom: '15px' }}>
                                    {infos[consultDetails].tags.map((tag, idx) => (
                                        <PatientTags key={idx}>{tag}</PatientTags>
                                    ))}
                                </TagsWrapper>
                                <ModalText>Notes</ModalText>
                                <ModalSeenBy>
                                    Lorem Ipsum nend dneiedi wiiqmids deidemmide dismisemsid dirfeienisdds{' '}
                                </ModalSeenBy>
                                <ModalText>Actions</ModalText>
                                <ModalSeenBy>
                                    Lorem Ipsum nend dneiedi wiiqmids deidemmide dismisemsid dirfeienisdds
                                </ModalSeenBy>
                                <ModalSeenBy>
                                    Lorem Ipsum nend dneiedi wiiqmids deidemmide dismisemsid dirfeienisdds
                                </ModalSeenBy>
                            </ConsultRowDetails>
                            <RowLink onClick={() => {}}>
                                <RowLinkContent>
                                    <Circle />
                                    <span>View Chat Transcript</span>
                                </RowLinkContent>
                                <Image src={ArrowRight} height={23} width={23} alt="arrowRight"></Image>
                            </RowLink>
                            <RowLink onClick={() => {}}>
                                <RowLinkContent>
                                    <Circle />
                                    <span>Heidi's Q&A</span>
                                </RowLinkContent>
                                <Image src={ArrowRight} height={23} width={23} alt="arrowRight"></Image>
                            </RowLink>
                            <RowLink onClick={() => {}}>
                                <RowLinkContent>
                                    <Circle />
                                    <span>Heidi's Differential</span>
                                </RowLinkContent>
                                <Image src={ArrowRight} height={23} width={23} alt="arrowRight"></Image>
                            </RowLink>
                        </PreviousConsultsWrapper>
                    </>
                )}
            </>
        </Modal>
    );
};

export default HeidiQnA;
