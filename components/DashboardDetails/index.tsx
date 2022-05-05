import React, { useState } from 'react';
import { PatientTags } from '../../styles/globalStyles';
import {
    DashboardDetailsContainer,
    StyledButton,
    styles,
    SettingsButton,
    Line,
    DashboardDetailsCallSummary,
    RedCircle,
    Agenda,
    FlexWrap,
} from './styles';
import MicrophoneOff from '../../public/assets/icons/microphone_off_lg.svg';
import MicrophoneOn from '../../public/assets/icons/microphone_on_lg.svg';
import ChatWhite from '../../public/assets/icons/chat_white.svg';
import PhoneWhite from '../../public/assets/icons/phone_white.svg';
import ChatIcon from '../../public/assets/icons/chat_lg.svg';
import Image from 'next/image';
import ArrowDown from '../Images/ArrowDown';
import { AppointmentOptions } from './AppointmentOptions';
import CompleteConsultModal from '../Modals/CompleteConsult';

interface Props {
    type?: string;
    status?: string;
    setProgress: (arg: string) => void;
    progress: string;
    chatToggle?: boolean;
    setChatToggle?: (arg: boolean) => void;
}

export const DashboardDetails: React.FC<Props> = (props) => {
    const [completeModalToggle, setCompleteModalToggle] = useState(false);
    const { progress, setProgress, type = 'Chat', chatToggle = false, setChatToggle = () => {}, status = '' } = props;
    const [micOn, setMicOn] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<Element | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
        setDropdownOpen(true);
    };

    const getButtonType = (type: string, status: string) => {
        if (status === 'Cancelled') {
            return handleProgressCancelledButton();
        }
        switch (type) {
            case 'Chat':
                return handleProgressChatButton();
            default:
                return handleProgressPhoneButton();
        }
    };

    const handleProgressChatButton = () => {
        switch (progress) {
            case 'not started':
                return (
                    <StyledButton style={{ background: '#00C880' }}>
                        <FlexWrap onClick={() => setProgress('started')}>
                            <Image src={ChatWhite} height={24} width={30} alt="Chat" />
                            <span style={styles.ButtonText}>Start Chat</span>
                        </FlexWrap>
                        <Line></Line>
                        <FlexWrap onClick={(e) => handleClick(e)}>
                            <ArrowDown color="white"></ArrowDown>
                        </FlexWrap>
                        <AppointmentOptions anchorEl={anchorEl} open={dropdownOpen} setOpen={setDropdownOpen} />
                    </StyledButton>
                );
            case 'started':
                return (
                    <StyledButton style={{ background: '#E95252' }} onClick={() => setProgress('completed')}>
                        <FlexWrap onClick={() => setProgress('completed')}>
                            <Image src={ChatWhite} height={24} width={30} alt="Chat" />
                            <span style={styles.ButtonText}>End Chat</span>
                        </FlexWrap>
                        <Line></Line>
                        <FlexWrap onClick={(e) => handleClick(e)}>
                            <ArrowDown color="white"></ArrowDown>
                        </FlexWrap>
                        <AppointmentOptions anchorEl={anchorEl} open={dropdownOpen} setOpen={setDropdownOpen} />
                    </StyledButton>
                );
            default:
                return (
                    <StyledButton onClick={() => setCompleteModalToggle(true)} style={{ padding: '11px 20px' }}>
                        Complete
                    </StyledButton>
                );
        }
    };

    const handleProgressPhoneButton = () => {
        switch (progress) {
            case 'not started':
                return (
                    <StyledButton style={{ background: '#00C880' }}>
                        <FlexWrap onClick={() => setProgress('started')}>
                            <Image src={PhoneWhite} height={24} width={30} alt="Chat" />
                            <span style={styles.ButtonText}>Start Call</span>
                        </FlexWrap>
                        <Line></Line>
                        <FlexWrap onClick={(e) => handleClick(e)}>
                            <ArrowDown color="white"></ArrowDown>
                        </FlexWrap>
                        <AppointmentOptions anchorEl={anchorEl} open={dropdownOpen} setOpen={setDropdownOpen} />
                    </StyledButton>
                );
            case 'started':
                return (
                    <StyledButton style={{ background: '#E95252' }}>
                        <FlexWrap onClick={() => setProgress('completed')}>
                            <Image src={PhoneWhite} height={24} width={30} alt="Chat" />
                            <span style={styles.ButtonText}>End Call</span>
                        </FlexWrap>
                        <Line></Line>
                        <FlexWrap onClick={(e) => handleClick(e)}>
                            <ArrowDown color="white"></ArrowDown>
                        </FlexWrap>
                        <AppointmentOptions anchorEl={anchorEl} open={dropdownOpen} setOpen={setDropdownOpen} />
                    </StyledButton>
                );
            default:
                return (
                    <StyledButton onClick={() => setCompleteModalToggle(true)} style={{ padding: '11px 20px' }}>
                        Complete
                    </StyledButton>
                );
        }
    };

    const handleProgressCancelledButton = () => {
        return <StyledButton style={{ padding: '11px 20px' }}>Reschedule</StyledButton>;
    };

    return (
        <DashboardDetailsContainer>
            <CompleteConsultModal isToggle={completeModalToggle} toggle={setCompleteModalToggle} />
            <DashboardDetailsCallSummary
                style={{
                    background: progress !== 'started' || type === 'Chat' ? 'white' : '#ECF6F9',
                    marginBottom: progress !== 'started' || type === 'Chat' ? '0px' : '10px',
                    paddingBottom: progress !== 'started' || type === 'Chat' ? '0px' : '10px',
                }}
            >
                <div style={styles.DashboardDetailsCallSummary__Text}>
                    {status === 'Cancelled' ? (
                        <span style={styles.HeaderWarning}>Consult cancelled</span>
                    ) : (
                        <span style={styles.HeaderTitle}> Today's Consult </span>
                    )}

                    {progress === 'started' && type !== 'Chat' && (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <RedCircle />
                            <span style={{ fontSize: '12px', fontWeight: '400' }}> Duration 05:34</span>
                        </div>
                    )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {type !== 'Chat' && (
                        <>
                            {progress === 'started' ? (
                                <>
                                    <SettingsButton onClick={() => setMicOn(!micOn)}>
                                        <Image src={micOn ? MicrophoneOn : MicrophoneOff} height={25} width={25} />
                                    </SettingsButton>
                                    <SettingsButton
                                        onClick={() => setChatToggle(!chatToggle)}
                                        style={{ marginRight: '10px' }}
                                    >
                                        <Image src={ChatIcon} height={25} width={25} />
                                    </SettingsButton>
                                </>
                            ) : (
                                <SettingsButton
                                    onClick={() => setChatToggle(!chatToggle)}
                                    style={{ marginRight: '10px' }}
                                >
                                    <Image src={ChatIcon} height={25} width={25} />
                                </SettingsButton>
                            )}
                        </>
                    )}
                    {getButtonType(type, status)}
                </div>
            </DashboardDetailsCallSummary>
            <Agenda>
                <span style={{ marginBottom: '7px' }}> Agenda </span>
                <div style={{ display: 'flex' }}>
                    <PatientTags> Scripts </PatientTags>
                    <PatientTags> Tiredness</PatientTags>
                    <PatientTags> Nausea </PatientTags>
                </div>
            </Agenda>
        </DashboardDetailsContainer>
    );
};

export default DashboardDetails;
