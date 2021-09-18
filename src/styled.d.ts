import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: IThemeColors;
    }

    export interface IThemeColors {
        colorPrimary: string;
        colorPrimaryDark: string;
        colorPrimaryLight: string;
        colorAccent: string;
        colorDark: string;
        colorMedium: string;
        colorGray: string;
    }
}
