import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import React, { useEffect, ReactChild, ReactChildren } from 'react';
import { CircularProgress } from '@mui/material';
import theme from '../../theme';

interface Props {
    children: ReactChild | ReactChildren;
}

const ProtectedRoute: React.FC<Props> = (props) => {
    const { children } = props;
    const { data: session, status } = useSession();
    const loading = status === 'loading';
    const hasUser = !!session?.user;
    const router = useRouter();

    useEffect(() => {
        if (!loading && !hasUser) {
            router.push('/login');
        }
    }, [loading, hasUser]);

    if (loading || !hasUser) {
        return (
            <div
                style={{
                    height: '100vh',
                    width: '100vw',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}
            >
                <CircularProgress size={55} sx={{ color: theme.palette.primary.main }} />
                <span style={{ color: theme.palette.primary.main, marginTop: '23px', fontSize: '18px' }}>
                    Loading...
                </span>
            </div>
        );
    }

    return <>{children}</>;
};

export default ProtectedRoute;
