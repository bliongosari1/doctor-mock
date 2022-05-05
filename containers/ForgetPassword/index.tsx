import React, { useState, useEffect } from 'react';
import {
    LoginBoxWrapper,
    LinkText,
    SingleLineInput,
    FormTitle,
    FormWrapper,
    FormWarning,
    TextTitle,
    TextSubtitle,
    Text,
} from './styles';
import Image from 'next/image';
import CompactHeidiLogo from '../../public/assets/logos/heidi-icon-compact.svg';
import { MainButton, SecondaryButton } from '../../styles/globalStyles';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export const ForgetPassword: React.FC = () => {
    const { status } = useSession();
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [attemptsRemaining, setAttemptsRemaining] = useState(6);
    const [usernameWarning, setUsernameWarning] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

    useEffect(() => {
        setUsernameWarning(false);
    }, [username]);

    const onSubmit = async () => {
        if (/\d/.test(username)) {
            setUsernameWarning(true);
            setAttemptsRemaining(attemptsRemaining - 1);
        } else {
            setEmailSent(true);
        }
    };

    useEffect(() => {
        if (status === 'authenticated') {
            router.push('/');
        }
    }, [status]);

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
            {!emailSent ? (
                <>
                    <TextTitle style={{ margin: '40px 0 5px', fontSize: '18px' }}>Forgot your password?</TextTitle>
                    <TextSubtitle
                        style={{ marginBottom: '5px', fontSize: '16px', textAlign: 'center', maxWidth: '80%' }}
                    >
                        No worries, we’ll send a reset code to your email address
                    </TextSubtitle>
                    <FormWrapper>
                        <FormTitle warning={usernameWarning} style={{ marginTop: '20px' }}>
                            Enter your email address
                        </FormTitle>
                        <SingleLineInput
                            warning={usernameWarning}
                            type="email"
                            placeholder={'E.g Tom@oscer.ai'}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        {usernameWarning && (
                            <FormWarning> Email address not found. {attemptsRemaining} attempts remaining</FormWarning>
                        )}
                    </FormWrapper>
                    <MainButton
                        disabled={!username}
                        onClick={() => onSubmit()}
                        style={{
                            width: '100%',
                            marginBottom: '20px',
                            boxShadow:
                                '0px 6px 8px -6px rgba(24, 39, 75, 0.12), 0px 8px 16px -6px rgba(24, 39, 75, 0.08)',
                        }}
                    >
                        Send reset link
                    </MainButton>
                </>
            ) : (
                <>
                    <TextTitle style={{ margin: '40px 0 5px', fontSize: '18px' }}>
                        Your reset link has been sent
                    </TextTitle>
                    <TextSubtitle
                        style={{ marginBottom: '5px', fontSize: '16px', textAlign: 'center', maxWidth: '80%' }}
                    >
                        to your email t•••••2@gmail.com
                    </TextSubtitle>
                    <SecondaryButton
                        disabled={!username}
                        onClick={() => onSubmit()}
                        style={{
                            width: '100%',
                            margin: '20px 0 20px',
                            fontWeight: '700',
                        }}
                    >
                        Resend reset link
                    </SecondaryButton>
                </>
            )}
            <div>
                <Text style={{ fontSize: '12px', fontWeight: '400' }}>
                    Lost access to your mobile or email address?{' '}
                </Text>
                <Link href="/forgetpassword" passHref>
                    <LinkText>Contact support</LinkText>
                </Link>
            </div>
        </LoginBoxWrapper>
    );
};

export default ForgetPassword;
