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
import { MainButton } from '../../styles/globalStyles';
import Link from 'next/link';
import ProfileImg from '../../public/assets/images/tom_kelly.png';
import { InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material/';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export const LoginBox: React.FC = () => {
    const { status } = useSession();
    const router = useRouter();
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
    const [passwordWarning, setPasswordWarning] = useState(true);
    const [passwordConfirmationWarning, setPasswordConfirmationWarning] = useState(true);

    const [verifying, setVerifying] = useState(false);
    const [verifyingCompleted, setVerifyingCompleted] = useState(false);

    useEffect(() => {
        setPasswordConfirmationWarning(false);
        setPasswordWarning(false);
    }, [passwordConfirmation, password]);

    useEffect(() => {
        if (status === 'authenticated') {
            router.push('/');
        }
    }, [status]);

    const toggleComplete = () => {
        // setCheckmark(true);
        $('.circle_loader').toggleClass('load_complete');
        $('.checkmark').toggle();
    };

    const onSubmit = async () => {
        if (password !== passwordConfirmation) {
            setPasswordConfirmationWarning(true);
        } else {
            setVerifying(true);
            setTimeout(() => {
                toggleComplete();
                setVerifyingCompleted(true);
            }, 2000);
        }
    };

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleClickShowPasswordConfirmation = () => setShowPasswordConfirmation(!showPasswordConfirmation);

    return (
        <LoginBoxWrapper>
            <Image src={CompactHeidiLogo} height={93} width={100} alt="heidilogo" />
            {!verifying ? (
                <>
                    <AvatarWrapper>
                        <AvatarBackground>
                            <img src={ProfileImg} height={120} width={120} alt="profile" />
                        </AvatarBackground>
                    </AvatarWrapper>
                    <TextTitle style={{ margin: '10px 0 5px' }}>Dr Tom Kelly</TextTitle>
                    <TextSubtitle style={{ marginBottom: '20px' }}>General Practitioner</TextSubtitle>
                    <FormWrapper style={{}}>
                        <FormTitle warning={passwordWarning}>New Password</FormTitle>
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
                        {passwordWarning && <FormWarning> Password must be in the form of ... </FormWarning>}
                    </FormWrapper>
                    <FormWrapper style={{ marginBottom: '20px' }}>
                        <FormTitle warning={passwordConfirmationWarning}>New password confirmation</FormTitle>
                        <SingleLineInput
                            warning={passwordConfirmationWarning}
                            type={showPasswordConfirmation ? 'text' : 'password'}
                            value={passwordConfirmation}
                            endAdornment={
                                passwordConfirmation.length > 0 && (
                                    <InputAdornment position="end">
                                        <ImageWrapper>
                                            {showPasswordConfirmation ? (
                                                <Visibility onClick={handleClickShowPasswordConfirmation} />
                                            ) : (
                                                <VisibilityOff onClick={handleClickShowPasswordConfirmation} />
                                            )}
                                        </ImageWrapper>
                                    </InputAdornment>
                                )
                            }
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                        />
                        {passwordConfirmationWarning && <FormWarning> Passwords do not match </FormWarning>}
                    </FormWrapper>
                    <MainButton
                        disabled={!passwordConfirmation || !password}
                        onClick={() => onSubmit()}
                        style={{
                            width: '100%',
                            marginBottom: '25px',
                            boxShadow:
                                '0px 6px 8px -6px rgba(24, 39, 75, 0.12), 0px 8px 16px -6px rgba(24, 39, 75, 0.08)',
                        }}
                    >
                        Reset Password
                    </MainButton>

                    <Link href="/login" passHref>
                        <LinkText style={{ marginBottom: '3px' }}>Login with current password</LinkText>
                    </Link>
                    <div>
                        <Text style={{ fontSize: '12px', fontWeight: '400' }}>Didn’t request a password reset?</Text>
                        <Link href="/contactsupport" passHref>
                            <LinkText style={{ marginLeft: '5px' }}>Contact support</LinkText>
                        </Link>
                    </div>
                </>
            ) : (
                <>
                    <TickWrapper style={{ margin: '30px 0' }}>
                        <div className="circle_loader">
                            <div className="checkmark draw"></div>
                        </div>
                    </TickWrapper>
                    {verifyingCompleted && (
                        <>
                            <TextTitle
                                style={{ maxWidth: '80%', textAlign: 'center', lineHeight: '32px', fontSize: '22px' }}
                            >
                                Your password has been reset successfully
                            </TextTitle>
                            <MainButton
                                onClick={() => router.push('/login')}
                                style={{
                                    width: '100%',
                                    margin: '30px 0 10px',
                                    boxShadow:
                                        '0px 6px 8px -6px rgba(24, 39, 75, 0.12), 0px 8px 16px -6px rgba(24, 39, 75, 0.08)',
                                }}
                            >
                                Login
                            </MainButton>
                        </>
                    )}
                </>
            )}
        </LoginBoxWrapper>
    );
};

export default LoginBox;
