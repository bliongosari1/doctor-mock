import { Autocomplete, Button } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../../theme';

export const ContentWrapper = styled('div')({
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
});

export const Title = styled('span')({
    fontSize: '22px',
    fontWeight: '700',
    color: theme.palette.text.primary,
});

export const SmallTitle = styled('span')({
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '700',
    color: theme.palette.text.primary,
});

export const GreySubtitle = styled('span')((props: { warning?: boolean }) => ({
    fontSize: '14px',
    lineHeight: '18px',
    color: props.warning ? theme.palette.text.red : theme.palette.text.secondary,
}));

export const OptionsWrapper = styled('div')({
    height: '100%',
    width: '100%',
    display: 'flex',
    gap: '32px',
    marginTop: '42px',
    justifyContent: 'space-between',
});

export const NoDiagnosisPlaceholder = styled('div')({
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '32px',
    background: '#F7F9FC',
    borderRadius: '8px',
});

export const OptionButtons = styled('div')({
    width: '50%',
    padding: '14px 16px',
    background: '#F7F9FC',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
        cursor: 'pointer',
        opacity: '0.92',
    },
});

export const Dropdown = styled(Autocomplete)({
    root: {
        '& $notchedOutline': {
            borderColor: 'transparent',
        },
        '&:hover $notchedOutline': {
            borderColor: 'transparent',
        },
        '&$focused $notchedOutline': {
            borderColor: 'transparent',
        },
    },
    option: {
        padding: '5px 12px',
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 42,

        '&:hover': {
            backgroundColor: theme.palette.action.hover,
            '& .Mui-Typography-root': { color: 'red' },
        },

        '& .Mui-selected': {
            backgroundColor: theme.palette.action.hover,
            '& .Mui-Typography-root': { color: 'red' },
        },

        '&.disabled': {
            opacity: 0.5,
            '& .Mui-Typography-root': {
                color: theme.palette.text.disabled,
            },
        },
    },
    '&.MuiAutocomplete-root .MuiOutlinedInput-root': {
        fontFamily: 'Lato',
        padding: '4px 9px 4px 19px',
        color: theme.palette.text.secondary,
        marginBottom: '16px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent',
    },
    '& .MuiInputBase-root': {
        borderRadius: '12px',
        border: '0px solid transparent',
        backgroundColor: '#F7F9FC',
    },
    '& .MuiAutocomplete-listbox .MuiAutocomplete-option': {
        margin: '0px 14px',
        borderBottom: '1px solid grey',
        padding: '0',
    },
});

export const DNDWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'left',
    maxHeight: '250px',
});

export const HeidiSuggestedDiagnosisWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '165px',
    marginBottom: '20px',
    overflow: 'scroll',
});

export const HeidiSuggestions = styled('div')((props: { selected: boolean }) => ({
    padding: '6px 8px 6px 12px',
    background: props.selected ? '#D0E9F1' : '#FFE0E0',
    borderRadius: '16px',
    marginBottom: '12px',
    display: 'flex',
    color: props.selected ? '#1C4574' : '#D4356A',
    alignItems: 'center',
    width: 'fit-content',
    '&:hover': {
        cursor: 'pointer',
        opacity: 0.92,
    },
}));

export const HeidiSuggestionsText = styled('div')({
    fontSize: '13px',
    lineHeight: '18px',
    marginRight: '5px',
});

export const ButtonsWrapper = styled('div')({
    display: 'flex',
    alignSelf: 'flex-end',
    gap: '10px',
});

export const NotesSection = styled('textarea')({
    width: '100%',
    minHeight: 120,
    marginTop: '5px',
    marginBottom: '15px',
    fontSize: 14,
    borderRadius: '12px',
    overflow: 'visible',
    wordBreak: 'break-word',
    whiteSpace: 'normal',
    padding: '10px 15px 10px 15px',
    border: '1px solid #C5CEE0',
    '&::placeholder': {
        color: theme.palette.text.secondary,
    },
});

export const DocumentTags = styled('div')({
    display: 'flex',
    '&::placeholder': {
        color: theme.palette.text.secondary,
    },
});

export const DocumentIconWrapper = styled('div')((props: { selected: boolean }) => ({
    background: props.selected ? 'white' : 'unset',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '5px',
    marginLeft: '-5px',
    borderRadius: '8px',
}));

export const FileMessageWrapper = styled(Button)((props: { selected: boolean }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'none',
    marginRight: '5px',
    background: props.selected ? theme.palette.primary.main : theme.palette.background.main,
    width: 'fit-content',
    padding: '6px 15px',
    borderRadius: '16px',
    '&:hover': {
        color: props.selected ? 'white' : theme.palette.text.secondary,
        backgroundColor: props.selected ? `${theme.palette.primary.main}EB` : `${theme.palette.background.main}EB`,
    },
    '&.Mui-disabled': {
        color: 'white',
        backgroundColor: `#C5CEE0`,
    },
}));

export const FileMessageText = styled('span')((props: { selected: boolean }) => ({
    color: props.selected ? 'white' : theme.palette.text.primary,
    fontSize: '14px',
    '&:hover': {
        cursor: 'pointer',
        textDecoration: 'underline',
    },
}));

export const FilesWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    marginBottom: '15px',
});

export const styles = {};
