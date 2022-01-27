import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        
        colos: {
            primary: string;
            secundary: string;
            tertiary: string;
    
            white: string;
            black: string;
            gray: string;
    
            success: string
            info: string;
            warning: string;
            
        },
    };
}
