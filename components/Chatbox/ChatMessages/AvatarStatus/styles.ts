import { styled } from '@mui/system';

export const styles = {};

export const AvatarWrapper = styled(`div`)({
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '3px',
    marginRight: '7.5px',
    alignSelf: 'flex-end',
    position: 'relative',
    justifyContent: 'center',
});

export const AvatarBackground = styled(`div`)({
    width: '36px',
    height: '36px',
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
