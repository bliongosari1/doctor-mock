import { styled } from '@mui/system';
import theme from '../../../theme';
export const styles = {};

export const DashboardImageHelpWrapper = styled('div')({
    position: 'absolute',
    bottom: -3.45,
    right: 0,
    borderRadius: '16px',
});

export const DashboardImageTipWrapper = styled('div')({
    position: 'absolute',
    top: 24,
    left: 24,
    borderRadius: '16px',
});

export const Subtitle = styled('span')({
    fontFamily: 'Lato',
    fontSize: '22px',
    color: 'white',
    fontWeight: '500',
});

export const Title = styled('span')({
    padding: '10px 0',
    fontFamily: 'Lato',
    fontSize: '32px',
    lineHeight: '40px',
    color: 'white',
    fontWeight: '600',
});

export const Text = styled('span')({
    fontFamily: 'Lato',
    fontSize: '18px',
    lineHeight: '22px',
    color: 'white',
    fontWeight: '500',
});

export const SmallHeading = styled('span')({
    fontFamily: 'Lato',
    fontSize: '16px',
    lineHeight: '22px',
    color: 'white',
    fontWeight: '500',
});

export const TextWrapper = styled('div')({
    maxWidth: '50%',
    display: 'flex',
    flexDirection: 'column',
});

export const QuickTipWrapper = styled('div')({
    justifyContent: 'flex-end',
    maxWidth: '90%',
    display: 'flex',
    flexDirection: 'column',
});

export const QuickTipTitle = styled('div')({
    padding: '5px 0',
    fontFamily: 'Lato',
    fontSize: '30px',
    lineHeight: '40px',
    color: 'white',
    fontWeight: '600',
});

export const HelpDashboard = styled('div')({
    width: '100%',
    height: '100%',
    display: 'flex',
    background: 'linear-gradient(123.93deg, #1693BB 34.78%, #92D3E8 110.22%)',
    position: 'relative',
    padding: '24px',
    borderRadius: 16,
    boxShadow: '0px 6px 8px -6px rgba(24, 39, 75, 0.12), 0px 8px 16px -6px rgba(24, 39, 75, 0.08)',
});

export const QuickTipDashboard = styled('div')({
    width: '100%',
    height: '100%',
    display: 'flex',
    background: 'linear-gradient(330.69deg, #FF8298 11.67%, #FFADAD 88.4%)',
    position: 'relative',
    padding: '24px',
    borderRadius: 16,
    boxShadow: '0px 6px 8px -6px rgba(24, 39, 75, 0.12), 0px 8px 16px -6px rgba(24, 39, 75, 0.08)',
    '&:hover': {
        cursor: 'pointer',
        opacity: 0.92,
    },
});

export const TabsWrapper = styled('div')({
    display: 'flex',
    width: '100%',
    height: '100%',
    padding: '16px',
});

export const Tabs = styled('div')({
    display: 'flex',
    flex: 1,
    width: '50%',
    height: '100%',
    justifyContent: 'start',
    alignItems: 'center',
    padding: '0px 3px',
    flexDirection: 'column',
});

export const BlackHeading = styled('span')({
    fontFamily: 'Lato',
    fontSize: '16px',
    lineHeight: '24px',
    marginBottom: '16px',
    color: '#1C4574',
    fontWeight: '700',
});

export const InfoItem = styled('div')({
    width: '100%',
    margin: '0 0 10px 0',
    background: theme.palette.primary.white,
    border: '1px solid #EDF1F7',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'space-between',
    padding: '15px 15px 20px 15px',
    '&:hover': {
        cursor: 'pointer',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    },
});

export const InfoItemTextWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
});

export const InfoItemMainText = styled('span')({
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '30px',
    color: theme.palette.text.primary,
});

export const InfoItemSecondaryText = styled('span')({
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '16px',
    color: theme.palette.text.secondary,
});

export const ResourcesIconWrapper = styled('div')({
    height: '48px',
    width: '48px',
    marginRight: '10px',
    borderRadius: '9.6px',
    background: '#ECF6F9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const DocumentsIconWrapper = styled('div')({
    height: '48px',
    width: '48px',
    marginRight: '10px',
    borderRadius: '9.6px',
    background: '#FFE0E0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const LeftWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
});
