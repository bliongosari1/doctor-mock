import React, { useState, useEffect } from 'react';
import {
    LoginBoxWrapper,
    LinkText,
    SingleLineInput,
    FormTitle,
    FormWrapper,
    ImageWrapper,
    FormWarning,
    TickWrapper,
    AvatarWrapper,
    AvatarBackground,
    TextTitle,
    TextSubtitle,
    Text,
} from './styles';
import Image from 'next/image';
import $ from 'jquery';
import CompactHeidiLogo from '../../public/assets/logos/heidi-icon-compact.svg';
import { MainButton, SecondaryButton } from '../../styles/globalStyles';
import Link from 'next/link';
import ProfileImg from '../../public/assets/images/tom_kelly.png';
import { InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material/';
import { signIn, useSession } from 'next-auth/react';
// import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import theme from '../../theme';

const ReactCodeInput = dynamic(import('react-code-input'));

export const LoginBox: React.FC = () => {
    const { status, data: session } = useSession();
    // const router = useRouter();
    const [username, setUsername] = useState('');
    const [verificationStage, setVerificationStage] = useState(false);
    const [password, setPassword] = useState('');
    const [attemptsRemaining, setAttemptsRemaining] = useState(6);
    const [showPassword, setShowPassword] = useState(false);
    const [usernameWarning, setUsernameWarning] = useState(false);
    const [passwordWarning, setPasswordWarning] = useState(true);

    const [pinCodeWarning, setPinCodeWarning] = useState(false);
    const [verifying, setVerifying] = useState(false);

    const [pinCode, setPinCode] = useState('');

    useEffect(() => {
        console.log('session useEffect');
        console.log(session);
    }, [session]);

    useEffect(() => {
        setUsernameWarning(false);
        setPasswordWarning(false);
    }, [username, password]);

    const onSubmit = async () => {
        if (/\d/.test(username)) {
            setUsernameWarning(true);
        } else {
            if (/\d/.test(password)) {
                setPasswordWarning(true);
                setAttemptsRemaining(attemptsRemaining - 1);
            } else {
                setVerificationStage(true);
            }
        }
    };

    useEffect(() => {
        if (pinCode.replace(/\s+/g, '').length === 5) {
            setVerifying(true);
            if (pinCode.includes('0')) {
                // mock fail
                setTimeout(() => {
                    setPinCode('');
                    setPinCodeWarning(true);
                    setVerifying(false);
                    setAttemptsRemaining(attemptsRemaining - 1);
                }, 2000);
            } else {
                // mock success
                setTimeout(() => {
                    console.log('completed');
                    toggleComplete();
                }, 2000);
                setTimeout(() => {
                    signIn('credentials', {
                        username: username,
                        password: password,
                        redirect: false,
                        callbackUrl: `${window.location.origin}`,
                    });
                }, 2200);
            }
        }
        if (pinCode.length) {
            setPinCodeWarning(false);
        }
    }, [pinCode]);

    useEffect(() => {
        console.log('status use effect');
        console.log(status);
        console.log('next auth url: ' + process.env.NEXTAUTH_URL);
        console.log('next auth env: ' + process.env.NEXTAUTH_SECRET);

        if (status === 'authenticated') {
            alert('logged in');
            console.log('logged in triggered');
            // router.push('/');
        }
    }, [status]);

    const toggleComplete = () => {
        // setCheckmark(true);
        document.cookie = 'test=set_cookie';
        $('.circle_loader').toggleClass('load_complete');
        $('.checkmark').toggle();
        console.log('cookie: ', document.cookie.split(';'));
    };

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    if (attemptsRemaining === 0) {
        return (
            <LoginBoxWrapper>
                <Image src={CompactHeidiLogo} height={93} width={100} alt="heidilogo" />
                <FormWarning
                    style={{
                        fontSize: '14px',
                        lineHeight: '18px',
                        textAlign: 'center',
                        maxWidth: '90%',
                        fontWeight: '700',
                        margin: '30px 20px 10px 20px',
                    }}
                >
                    You’ve exceeded maxiumum attempts to login. Please contact support to regain access to your account.
                </FormWarning>
                <MainButton
                    onClick={() => {}}
                    style={{
                        width: '90%',
                        margin: '20px',
                        fontWeight: '700',
                        boxShadow: '0px 6px 8px -6px rgba(24, 39, 75, 0.12), 0px 8px 16px -6px rgba(24, 39, 75, 0.08)',
                    }}
                >
                    Contact Support
                </MainButton>
            </LoginBoxWrapper>
        );
    }
    return (
        <LoginBoxWrapper>
            <Image src={CompactHeidiLogo} height={93} width={100} alt="heidilogo" />
            {!verificationStage ? (
                <>
                    <FormWrapper>
                        <FormTitle warning={usernameWarning} style={{ marginTop: '20px' }}>
                            Email address
                        </FormTitle>
                        <SingleLineInput
                            warning={usernameWarning}
                            type="email"
                            placeholder={'E.g Tom@oscer.ai'}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        {usernameWarning && <FormWarning> Email address not found </FormWarning>}
                    </FormWrapper>
                    <FormWrapper style={{ marginBottom: '30px' }}>
                        <FormTitle warning={passwordWarning}> Password</FormTitle>
                        <SingleLineInput
                            warning={passwordWarning}
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            endAdornment={
                                password.length > 0 && (
                                    <InputAdornment position="end">
                                        <ImageWrapper>
                                            {showPassword ? (
                                                <Visibility onClick={handleClickShowPassword} />
                                            ) : (
                                                <VisibilityOff onClick={handleClickShowPassword} />
                                            )}
                                        </ImageWrapper>
                                    </InputAdornment>
                                )
                            }
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {passwordWarning && (
                            <FormWarning> Incorrect password, {attemptsRemaining} attempts remaining </FormWarning>
                        )}
                    </FormWrapper>
                    <MainButton
                        disabled={!username || !password}
                        onClick={() => onSubmit()}
                        style={{
                            width: '100%',
                            marginBottom: '20px',
                            boxShadow:
                                '0px 6px 8px -6px rgba(24, 39, 75, 0.12), 0px 8px 16px -6px rgba(24, 39, 75, 0.08)',
                        }}
                    >
                        Login
                    </MainButton>
                </>
            ) : (
                <>
                    <AvatarWrapper>
                        <AvatarBackground>
                            <img src={ProfileImg} height={120} width={120} alt="profile" />
                        </AvatarBackground>
                    </AvatarWrapper>
                    <TextTitle style={{ margin: '10px 0 5px' }}>Dr Tom Kelly</TextTitle>
                    <TextSubtitle style={{ marginBottom: '20px' }}>General Practitioner</TextSubtitle>
                    <Text style={{ marginBottom: '20px', maxWidth: '250px' }}>
                        We’ve sent a verification code to your mobile number ending in 0528
                    </Text>
                    {!verifying ? (
                        <>
                            <ReactCodeInput
                                type="text"
                                fields={5}
                                name={''}
                                isValid={!pinCodeWarning}
                                inputMode={'numeric'}
                                pattern={'[0-9]'}
                                value={pinCode}
                                autoFocus={!pinCodeWarning}
                                onChange={(value) => setPinCode(value)}
                                filterChars={'abcdefghiklmnopqrstuvwyxz-.'.split('')}
                                inputStyle={{
                                    fontFamily: 'Lato',
                                    textAlign: 'center',
                                    margin: '4px',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '4px',
                                    fontSize: '16px',
                                    paddingLeft: '0px',
                                    backgroundColor: 'white',
                                    color: theme.palette.text.main,
                                    border: '1px solid #C5CEE0',
                                }}
                                inputStyleInvalid={{
                                    fontFamily: 'Lato',
                                    margin: '4px',
                                    textAlign: 'center',
                                    marginBottom: '10px',
                                    fontSize: '16px',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '3px',
                                    color: 'red',
                                    border: '1px solid red',
                                }}
                            />
                            {pinCodeWarning && (
                                <FormWarning>
                                    Incorrect code, you have {attemptsRemaining} attempts remaining
                                </FormWarning>
                            )}
                            {pinCodeWarning ? (
                                <MainButton
                                    disabled={!username || !password}
                                    onClick={() => {}}
                                    style={{
                                        width: '90%',
                                        margin: '20px',
                                        fontWeight: '700',
                                    }}
                                >
                                    Resend Code
                                </MainButton>
                            ) : (
                                <SecondaryButton
                                    disabled={!username || !password}
                                    onClick={() => {}}
                                    style={{
                                        width: '90%',
                                        margin: '20px',
                                        fontWeight: '700',
                                    }}
                                >
                                    Resend Code
                                </SecondaryButton>
                            )}
                        </>
                    ) : (
                        <TickWrapper>
                            <div className="circle_loader">
                                <div className="checkmark draw"></div>
                            </div>
                        </TickWrapper>
                    )}
                </>
            )}
            <Link href="/forgetpassword" passHref>
                <LinkText>Trouble logging in?</LinkText>
            </Link>
        </LoginBoxWrapper>
    );
};

export default LoginBox;
