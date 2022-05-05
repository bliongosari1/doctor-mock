import React from 'react';
// import { AccordionDetails, Box, Typography } from '@mui/material';
import Modal from '../Modal';
import {
    ModalTitle,
    ModalTitleImage,
    AccordionSummaryStyled,
    AccordionStyled,
    AccordionDetailsStyledQnA,
} from '../styles';
import ArrowDownIcon from '../../public/assets/icons/arrow_down_lg.svg';
import { PatientTags } from '../../../styles/globalStyles';
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
            <>
                <ModalTitleImage></ModalTitleImage>
                <ModalTitle> Heidi Q&A</ModalTitle>
                {infos.map((info, key) => (
                    <AccordionStyled key={key}>
                        <AccordionSummaryStyled
                            expandIcon={<Image src={ArrowDownIcon} height={25} width={25} alt="" />}
                        >
                            {info.title}
                        </AccordionSummaryStyled>
                        <AccordionDetailsStyledQnA>
                            {info.details.map((detail, index) => (
                                <PatientTags key={index}>
                                    <span>{detail.value}</span>
                                </PatientTags>
                            ))}
                        </AccordionDetailsStyledQnA>
                    </AccordionStyled>
                ))}
            </>
        </Modal>
    );
};

export default HeidiQnA;
