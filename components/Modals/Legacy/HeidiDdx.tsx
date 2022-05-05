import React from 'react';
// import { AccordionDetails, Box, Typography } from '@mui/material';
import Modal from '../Modal';
import {
    ModalTitle,
    ModalTitleImage,
    AccordionSummaryStyled,
    AccordionStyled,
    AccordionDetailsStyledDdx,
    TickSeperated,
    TickWrapper,
} from '../styles';
import ArrowDownIcon from '../../public/assets/icons/arrow_down_lg.svg';
import Image from 'next/image';
import TickIcon from '../../public/assets/icons/tick_lg.svg';

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

export const HeidiDdx: React.FC<Props> = (props) => {
    const { isToggle = false, toggle = () => {} } = props;

    return (
        <Modal isToggle={isToggle} toggle={toggle}>
            <>
                <ModalTitleImage />
                <ModalTitle> Heidi Ddx</ModalTitle>
                {infos.map((info, index) => (
                    <AccordionStyled key={index}>
                        <AccordionSummaryStyled
                            expandIcon={<Image src={ArrowDownIcon} height={25} width={25} alt="" />}
                        >
                            {info.title}
                        </AccordionSummaryStyled>
                        <AccordionDetailsStyledDdx>
                            {info.details.map((detail, infoIndex) => (
                                <TickSeperated key={infoIndex}>
                                    <span>{detail.subtitle}</span>
                                    <TickWrapper>
                                        <Image src={TickIcon} height={25} width={25} alt="" />
                                    </TickWrapper>
                                </TickSeperated>
                            ))}
                        </AccordionDetailsStyledDdx>
                    </AccordionStyled>
                ))}
            </>
        </Modal>
    );
};

export default HeidiDdx;
