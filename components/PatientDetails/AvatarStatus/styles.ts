import { styled } from '@mui/system';

export const styles = {};

export const AvatarWrapper = styled(`div`)({
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '3px',
    position: 'relative',
    marginRight: '7.5px',
    justifyContent: 'center',
});

export const AvatarBackground = styled(`div`)({
    width: '60px',
    height: '60spx',
    borderRadius: '50%',
    background: 'grey',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const OnlineStatus = styled(`div`)({
    width: '12px',
    height: '12px',
    position: 'absolute',
    borderRadius: '50%',
    bottom: 0,
    right: 0,
    background: '#00C880',
});
