import {useColorScheme} from "@mui/material/styles";

const useTailwindColorScheme = () => {
    const {mode} = useColorScheme();

    return {
        backgroundColor: mode === 'light' ? 'from-slate-50 via-blue-100 to-slate-300' : 'from-slate-900 via-blue-900 to-purple-900',
    };
}

export default useTailwindColorScheme;
