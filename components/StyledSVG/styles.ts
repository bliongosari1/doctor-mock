import { styled } from '@mui/system';
import theme from '../../theme';
import SVG from 'react-inlinesvg';

export const styles = {
    TitlePrimary: {
        fontSize: '22px',
        fontWeight: '700',
        color: theme.palette.text.main,
    },
    TagWarning: {
        color: theme.palette.warning.main,
        marginBottom: '10px',
    },
    TitleSecondary: {
        fontSize: '12px',
        color: theme.palette.text.secondary,
    },

    AppointmentDetails__EmptyUpperBox: {
        display: 'flex',
    },
};

export const CustomSVG = styled(SVG)(
    (props: { color?: string; height?: string | number; width?: string | number }) => ({
        width: props.width ? props.width : 24,
        height: props.height ? props.height : 24,
        '& path': {
            fill: props.color ? props.color : 'undefined',
        },
    }),
);
