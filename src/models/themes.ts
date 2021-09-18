interface IAppTheme {
    colors: IThemeColors;
}

interface IThemeColors {
    colorPrimary: string;
    colorPrimaryLight: string;
    colorAccent: string;
    colorDark: string;
    colorMedium: string;
    colorGray: string;
}

export default IAppTheme;
