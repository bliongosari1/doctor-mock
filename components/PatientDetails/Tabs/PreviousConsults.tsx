import React, { useState } from 'react';
import {
    TabTitle,
    TabWrapper,
    ConsultRow,
    TagsWrapper,
    ModalDate,
    ModalSeenBy,
    AccordionStyled,
    AccordionDetailsStyled,
    AccordionSummaryStyledNoBorder,
    ModalSubtitle,
    RowLink,
    RowLinkContent,
} from './styles';
import Image from 'next/image';
import { Circle, PatientTags } from '../../../styles/globalStyles';
import ArrowRight from '../../../public/assets/icons/arrow_right.svg';
import Clip from '../../../public/assets/icons/clip.svg';
import ArrowDownIcon from '../../../public/assets/icons/arrow_down_lg.svg';
import AppointmentType from '../../AppointmentType';

interface Props {}

const infos = [
    {
        title: 'Dr Tom Kelly',
        date: '16/2/2012',
        type: 'Video Call',
        length: '15 mins',
        tags: ['tag1', 'tag2', 'tag3'],
    },
    {
        title: 'Dr Tom Kelly',
        date: '16/2/2012',
        type: 'Video Call',
        length: '15 mins',
        tags: ['tag1', 'tag2', 'tag3'],
    },
    {
        title: 'Dr Tom Kelly',
        date: '16/2/2012',
        type: 'Voice Call',
        length: '15 mins',
        tags: ['tag1', 'tag2', 'tag3'],
    },
    {
        title: 'Dr Tom Kelly',
        date: '16/2/2012',
        type: 'Chat',
        length: '15 mins',
        tags: ['tag1', 'tag2', 'tag3'],
    },
];

export const PreviousConsults: React.FC<Props> = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [consultDetails, setConsultDetails] = useState<number | null>();
    return (
        <>
            <TabWrapper>
                <TabTitle>Previous Consults</TabTitle>
                {infos.map((info, index) => (
                    <AccordionStyled
                        key={index}
                        style={{
                            paddingBottom: '10px',
                            borderBottom: '1px solid rgba(0, 0, 0, .125)',
                        }}
                    >
                        <AccordionSummaryStyledNoBorder
                            expandIcon={<Image src={ArrowDownIcon} height={25} width={25} alt="" />}
                        >
                            <ConsultRow onClick={() => setConsultDetails(index)} key={index}>
                                <div style={{ display: 'flex', marginBottom: '10px' }}>
                                    <AppointmentType type={info.type} length={info.length} noText />
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <ModalDate>{info.date}</ModalDate>
                                        <ModalSeenBy>{info.title}</ModalSeenBy>
                                    </div>
                                </div>
                                <ModalSeenBy style={{ marginBottom: '10px' }}>Agenda</ModalSeenBy>
                                <TagsWrapper>
                                    {info.tags.map((tag, idx) => (
                                        <PatientTags key={idx}>{tag}</PatientTags>
                                    ))}
                                </TagsWrapper>
                                <ModalSeenBy>
                                    {' '}
                                    Molestie faucibus sed ac habitasse pulvinar. Neque ultrices a magna enim pretium
                                    enim mattis risus. Morbi consectetur posuere hac est quisque vitae sed sit. Varius
                                    dignissim ullamcorper diam diam sed nascetur tincidunt
                                </ModalSeenBy>
                            </ConsultRow>
                        </AccordionSummaryStyledNoBorder>
                        <AccordionDetailsStyled>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        marginBottom: '7.5px',
                                    }}
                                >
                                    <ModalDate
                                        style={{
                                            fontSize: '15px',
                                            marginBottom: '2.5px',
                                        }}
                                    >
                                        Outcomes
                                    </ModalDate>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'start',
                                            margin: '2.5px 0',
                                        }}
                                    >
                                        <Image src={Clip} height={20} width={20} alt="" />
                                        <ModalSubtitle style={{ marginLeft: '10px' }}>
                                            Script 20mg Ondansetron
                                        </ModalSubtitle>
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'start',
                                            margin: '2.5px 0',
                                        }}
                                    >
                                        <Image src={Clip} height={20} width={20} alt="" />
                                        <ModalSubtitle style={{ marginLeft: '10px' }}>
                                            Script 20mg Ondansetron
                                        </ModalSubtitle>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <ModalDate style={{ fontSize: '15px', margin: '5px 0' }}>Diagnosis</ModalDate>
                                    <TagsWrapper>
                                        {info.tags.map((tag, idx) => (
                                            <PatientTags key={idx}>{tag}</PatientTags>
                                        ))}
                                    </TagsWrapper>
                                </div>
                            </div>
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
                        </AccordionDetailsStyled>
                    </AccordionStyled>
                ))}
            </TabWrapper>
        </>
    );
};

export default PreviousConsults;
