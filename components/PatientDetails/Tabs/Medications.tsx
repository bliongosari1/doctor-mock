import React from 'react';
import {
    TabTitle,
    AccordionSummaryStyled,
    AccordionStyled,
    AccordionDetailsStyled,
    SubtitleSeperated,
    TabWrapper,
} from './styles';
import Image from 'next/image';
import ArrowDownIcon from '../../../public/assets/icons/arrow_down_lg.svg';

interface Props {}

const infos = [
    {
        title: 'Current',
        details: [
            {
                subtitle: 'Condition 1',
                tick: true,
                value: 'Right',
            },
            {
                subtitle: 'Condition 2',
                tick: true,
                value: 'Right',
            },
            {
                subtitle: 'Condition 3',
                tick: true,
                value: 'Right',
            },
        ],
    },
    {
        title: 'Past',
        details: [
            {
                subtitle: 'Condition 1',
                tick: true,
                value: 'Right',
            },
            {
                subtitle: 'Condition 2',
                tick: true,
                value: 'Right',
            },
            {
                subtitle: 'Condition 3',
                tick: true,
                value: 'Right',
            },
        ],
    },
];

export const Medications: React.FC<Props> = () => {
    return (
        <>
            <TabWrapper>
                <TabTitle>Medications</TabTitle>
                {infos.map((info, index) => (
                    <AccordionStyled key={index}>
                        <AccordionSummaryStyled
                            expandIcon={<Image src={ArrowDownIcon} height={25} width={25} alt="" />}
                        >
                            {info.title}
                        </AccordionSummaryStyled>
                        <AccordionDetailsStyled>
                            {info.details.map((detail, infoIndex) => (
                                <SubtitleSeperated key={infoIndex}>
                                    <span>{detail.subtitle}</span>
                                    <span>{detail.value}</span>
                                </SubtitleSeperated>
                            ))}
                        </AccordionDetailsStyled>
                    </AccordionStyled>
                ))}
            </TabWrapper>
        </>
    );
};

export default Medications;
