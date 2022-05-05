import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import type {} from '@mui/lab/themeAugmentation';
import { Theme } from '@mui/material';

// import { Theme } from '@mui/material';

declare module '@mui/material/styles' {
    interface DefaultTheme extends Theme {}

    interface Grey {
        light?: string;
    }

    interface TypeBackground {
        main: string;
        secondary: string;
        white: string;
    }

    interface PaletteColor {
        main: string;
        lighter?: string;
        white?: string;
        darker?: string;
        red?: string;
        lightDark?: string;
        grey?: string;
        border?: string;
    }

    interface TypeText {
        main?: string;
        tertiary?: string;
        red?: string;
    }

    interface Color {
        grey?: Grey;
    }

    interface TypeDivider {
        main: string;
    }
}

/**
 * Color opacity hex https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
 * 95% — F2
 * 90% — E6
 * 85% — D9
 * 80% — CC
 * 75% — BF
 * 70% — B3
 * 65% — A6
 * 60% — 99
 * 55% — 8C
 * 50% — 80
 * 45% — 73
 * 40% — 66
 * 35% — 59
 * 30% — 4D
 * 25% — 40
 * 20% — 33
 * 15% — 26
 * 10% — 1A
 * 5% —  0D
 */

const DARK = '#002348';
const GREY = '#919aa3';

const defaultTheme = createTheme({});

const colorTheme = {
    ...defaultTheme,
    palette: {
        primary: {
            dark: '#1C4574',
            main: '#1693BB',
            light: '#83d0f0',
            lightDark: '#3fb6e8',
            red: '#FF9898',
            grey: '#667B91',
            contrastText: '#ffffff',
            border: '#C5CEE0',
        },
        background: {
            default: '#ECF6F9',
            paper: '',
            white: '#fff',
            main: '#EDF1F7',
            secondary: '#E4E9F2',
            red: 'rgba(233, 82, 82, 0.2)',
        },
        secondary: {
            main: '#fcb9ad',
            light: 'rgba(251, 167, 153, 0.2)',
            dark: '',
            contrastText: '',
        },
        divider: 'rgba(33, 33, 33, 0.08)',
        text: {
            primary: '#002348',
            secondary: '#667B91',
            tertiary: '#B3BDC8',
            disabled: '',
            red: '#E95252',
        },
        info: {
            main: '#4A84FF',
            light: '',
            dark: '',
            contrastText: '',
        },
        warning: {
            light: '#C5CEE0',
            main: '#E95252',
            sucess: '#00C880',
            warning: '#F0B61F',
            danger: '#E95252',
            contrastText: '',
        },
        error: {
            light: '#fba799',
            main: '#f44336',
            dark: '',
            contrastText: '',
        },
    },
};

const theme = responsiveFontSizes(
    createTheme({
        ...colorTheme,

        typography: {
            // color: '#ecf2ff',
            htmlFontSize: 16,
            // text: {
            //   main: '#ecf2ff',
            //   light: 'rgba(0, 35, 72, 0.6)',
            // },
            button: {
                fontSize: 16,
                fontWeight: 600,
            },
            h1: {
                fontSize: 56,
                fontWeight: 'normal',
                letterSpacing: 'normal',
                color: DARK,
                lineHeight: 1.11,
            },
            h2: {
                fontSize: 44,
                fontWeight: 'normal',
                color: DARK,
                [colorTheme.breakpoints.down('xs')]: {
                    fontSize: 25,
                },
            },
            h3: {
                fontSize: 30,
                color: DARK,
                lineHeight: 1.2,
            },
            subtitle1: {
                fontSize: 30,
                fontWeight: 'normal',
                color: GREY,
                lineHeight: 1.5,
                letterSpacing: 'normal',
                [colorTheme.breakpoints.down('xs')]: {
                    fontSize: 17,
                },
            },
        },
    }),
);

declare module 'styled-components' {
    type CustomTheme = typeof theme;
    export interface DefaultTheme extends CustomTheme {}
}

export default theme;
