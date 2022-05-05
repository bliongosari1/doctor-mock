import React from 'react';
// import { AccordionDetails, Box, Typography } from '@mui/material';
import Modal from '../Modal';
import {
    ModalTitle,
    ModalTitleImage,
    AccordionSummaryStyled,
    AccordionStyled,
    AccordionDetailsStyled,
    SubtitleSeperated,
} from '../styles';
import ArrowDownIcon from '../../public/assets/icons/arrow_down_lg.svg';
import Image from 'next/image';

interface Props {
    isToggle: boolean;
    toggle: (arg: boolean) => void;
}

const infos = [
    {
        title: 'Conditions',
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
        title: 'Lifestyle',
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
        title: 'Sex and Pregnancy',
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
        title: 'Lifestyle',
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
        title: 'Sex and Pregnancy',
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

export const HeidiQnA: React.FC<Props> = (props) => {
    const { isToggle = false, toggle = () => {} } = props;

    return (
        <Modal isToggle={isToggle} toggle={toggle}>
            <ModalTitleImage></ModalTitleImage>
            <ModalTitle> Medical History</ModalTitle>
            {infos.map((info, index) => (
                <AccordionStyled key={index}>
                    <AccordionSummaryStyled expandIcon={<Image src={ArrowDownIcon} height={25} width={25} alt="" />}>
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
        </Modal>
    );
};

export default HeidiQnA;
