import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
    
        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
    
            with: string;
            black: string;
            gray: string;
    
            success: string;
            information: string;
            warning: string;
        },
    }
}