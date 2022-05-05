import { Tabs, Checkbox } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../../theme';

export const styles = {
    AppoinmentPatientSummary__Required: {
        marginTop: '-6px',
        marginBottom: '10px',
        height: '15px',
    },
    AppoinmentPatientSummary__RowTags: {
        marginTop: '10px',
        height: '20px',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
    },
    AppoinmentPatientSummary__RowLeft: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
        marginRight: 10,
    },
    AppoinmentPatientSummary__RowRight: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
    },
};

export const AppointmentsTabs = styled(Tabs)(({}) => ({
    '&.MuiTabs-root': {
        padding: '0 10px',
    },
    '& .MuiTabs-scroller': {
        // background: 'blue'
    },
    '& .MuiTabs-flexContainer': {
        justifyContent: 'center',
    },
}));

export const PatientSummaryContainer = styled('div')((props: { selected: boolean }) => ({
    width: '100%',
    margin: '0 0 17px 0',
    background: props.selected ? `${theme.palette.primary.main}0D` : theme.palette.primary.white,
    border: '1px solid #EDF1F7',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    justifyContent: 'start',
    padding: '15px 15px 20px 15px',
    maxHeight: props.selected ? '450px' : '200px',
    transition: 'max-height 0.4s ease',
    borderLeft: props.selected ? `12px solid ${theme.palette.primary.main}` : `unset`,
    boxShadow: `${props.selected && 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}`,
    '&:hover': {
        cursor: `${!props.selected && 'pointer'}`,
        boxShadow: `${!props.selected && 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}`,
    },
}));

export const PatientSummaryExpanded = styled('div')((props: { selected: boolean }) => ({
    width: '100%',
    marginTop: 25,
    display: props.selected ? 'flex' : 'none',
    flexDirection: 'column',
    fontSize: '14px',
    fontWeight: '500',
}));

export const PatientSummaryItem = styled('div')({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    fontSize: '16px',
    fontWeight: '400',
    borderBottom: `1px solid ${theme.palette.divider};`,
    '&:hover': {
        cursor: 'pointer',
    },
});

export const StyledCheckbox = styled(Checkbox)({
    width: '15px',
    height: '15px',
    marginRight: '10px',
    '&.MuiCheckbox-root': {
        color: '#C5CEE0',
    },
});

export const PatientSummaryItemContent = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
});

export const AppoinmentPatientSummary__Row = styled('div')({
    marginBottom: '5px',
    height: '18px',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start',
});

export const AppoinmentPatientSummary__RowPrimary = styled('div')({
    marginBottom: '10px',
    height: '20px',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
});

export const AppoinmentPatientSummary__Primary = styled('span')({
    fontSize: 18,
    fontWeight: 700,
    color: theme.palette.text.primary,
});

export const AppoinmentPatientSummary__Secondary = styled('span')({
    fontSize: 14,
    color: theme.palette.text.secondary,
});

export const AppoinmentPatientSummary__Warning = styled('span')({
    fontSize: 14,
    color: theme.palette.warning.main,
});

export const ExtraIcons = styled('div')({
    display: 'flex',
    position: 'absolute',
    right: 10,
});

export const ImageButton = styled('div')({
    '&:hover': {
        cursor: 'pointer',
        opacity: '0.92',
    },
});
