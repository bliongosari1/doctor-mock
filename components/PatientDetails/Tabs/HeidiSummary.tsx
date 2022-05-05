import React, { useState } from 'react';
import {
    TabTitle,
    TabText,
    TabWrapper,
    LinkWrapper,
    BackButton,
    TabSubtitle,
    AccordionStyled,
    AccordionSummaryStyled,
    AccordionDetailsStyled,
    SubtitleSeperated,
    DdxNotFound,
    DangerLine,
} from './styles';
import Image from 'next/image';
import { Circle } from '../../../styles/globalStyles';
import BackIcon from '../../../public/assets/icons/back_lg.svg';
import ArrowDownIcon from '../../../public/assets/icons/arrow_down_lg.svg';
import GreenTickIcon from '../../../public/assets/icons/green_tick.svg';
import YellowMaybe from '../../../public/assets/icons/yellow_maybe.svg';
import DangerIcon from '../../../public/assets/icons/danger.svg';
import RedCross from '../../../public/assets/icons/red_cross.svg';
import theme from '../../../theme';

interface Props {
    ddxActive: boolean;
    setDdxActive: (arg: boolean) => void;
}

const infos = [
    {
        title: 'URTI',
        details: [
            {
                subtitle: 'Cough',
                tick: true,
                value: 'Yes',
                icon: GreenTickIcon,
            },
            {
                subtitle: 'Headache',
                tick: true,
                value: 'No',
                icon: RedCross,
            },
            {
                subtitle: 'Rash',
                tick: true,
                value: 'Unsure',
                icon: YellowMaybe,
            },
        ],
    },
    {
        title: 'Stepthroat',
        details: [
            {
                subtitle: 'Condition 1',
                tick: true,
                value: 'Right',
                icon: GreenTickIcon,
            },
            {
                subtitle: 'Condition 2',
                tick: true,
                value: 'Right',
                icon: YellowMaybe,
            },
            {
                subtitle: 'Condition 3',
                tick: true,
                value: 'Right',
                icon: RedCross,
            },
        ],
    },
];

export const HeidiSummary: React.FC<Props> = (props) => {
    const { ddxActive, setDdxActive } = props;
    const [toggle, setToggle] = useState('default');
    return (
        <>
            <TabWrapper>
                {toggle === 'default' && !ddxActive ? (
                    <>
                        <TabTitle style={{ marginBottom: '10px' }}>Heidi Summary </TabTitle>
                        <TabText>
                            {' '}
                            Why do we use it? It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The point of using Lorem Ipsum is
                            that it has a more-or-less normal distribution of letters, as opposed to using 'Content
                            here, content here', making it look like readable English. Many desktop publishing packages
                            and web page editors now use Lorem Ipsum as their default model text, and a search for
                            'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
                            evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the
                        </TabText>
                        <LinkWrapper style={{ marginTop: '15px' }} onClick={() => setToggle('ddx')}>
                            <Circle />
                            View Ddx
                        </LinkWrapper>
                        <LinkWrapper onClick={() => setToggle('qna')}>
                            <Circle />
                            View Q&A
                        </LinkWrapper>
                    </>
                ) : toggle === 'ddx' || ddxActive ? (
                    <>
                        <BackButton
                            onClick={() => {
                                setToggle('default');
                                setDdxActive(false);
                            }}
                        >
                            <Image src={BackIcon} height={25} width={25} alt="" />
                        </BackButton>
                        <TabTitle style={{ marginBottom: '10px' }}>Heidi DDX </TabTitle>
                        <TabSubtitle style={{ fontSize: '16px' }}>Most Likely </TabSubtitle>
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
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Image src={detail.icon} height={25} width={25} alt="" />
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        marginLeft: '6px',
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            color: theme.palette.text.primary,
                                                            fontSize: '16px',
                                                        }}
                                                    >
                                                        {detail.subtitle}
                                                    </span>
                                                    <span>Do you have a {detail.subtitle}?</span>
                                                </div>
                                            </div>
                                            <span
                                                style={{
                                                    color: theme.palette.text.primary,
                                                }}
                                            >
                                                {detail.value}
                                            </span>
                                        </SubtitleSeperated>
                                    ))}
                                </AccordionDetailsStyled>
                            </AccordionStyled>
                        ))}

                        <TabSubtitle style={{ fontSize: '16px', marginTop: '20px' }}>Less Likely </TabSubtitle>
                        <div>
                            <DdxNotFound>
                                <DangerLine />
                                <div style={{ display: 'flex', padding: '15px 5px' }}>
                                    <img src={DangerIcon} style={{ height: 25, width: 25 }} />
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            marginLeft: '10px',
                                        }}
                                    >
                                        <span
                                            style={{
                                                lineHeight: '22px',
                                                color: '#E95252',
                                                marginBottom: '5px',
                                            }}
                                        >
                                            We were unable to determine a most likely diagnosis
                                        </span>
                                        <span
                                            style={{
                                                color: theme.palette.text.secondary,
                                                fontSize: '12px',
                                            }}
                                        >
                                            {' '}
                                            Our algorithim didn’t have enough confidence :’({' '}
                                        </span>
                                    </div>
                                </div>
                            </DdxNotFound>
                        </div>

                        <TabSubtitle style={{ fontSize: '16px', marginTop: '20px' }}>Don't Miss </TabSubtitle>
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
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Image src={detail.icon} height={25} width={25} alt="" />
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        marginLeft: '6px',
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            color: theme.palette.text.primary,
                                                            fontSize: '16px',
                                                        }}
                                                    >
                                                        {detail.subtitle}
                                                    </span>
                                                    <span>Do you have a {detail.subtitle}?</span>
                                                </div>
                                            </div>
                                            <span
                                                style={{
                                                    color: theme.palette.text.primary,
                                                }}
                                            >
                                                {detail.value}
                                            </span>
                                        </SubtitleSeperated>
                                    ))}
                                </AccordionDetailsStyled>
                            </AccordionStyled>
                        ))}
                    </>
                ) : (
                    <>
                        <BackButton onClick={() => setToggle('default')}>
                            <Image src={BackIcon} height={25} width={25} alt="" />
                        </BackButton>
                        <TabTitle style={{ marginBottom: '10px' }}> Heidi QnA </TabTitle>
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
                    </>
                )}
            </TabWrapper>
        </>
    );
};

export default HeidiSummary;
