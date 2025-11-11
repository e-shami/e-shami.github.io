import {useColorScheme} from "@mui/material/styles";

const useTailwindColorScheme = () => {
    const {mode, systemMode} = useColorScheme();
    const isLight = mode === 'light' || systemMode === 'light';
    return {
        backgroundColor: isLight ? 'from-slate-50 via-blue-100 to-slate-300' : 'from-slate-900 via-blue-900 to-purple-900',
        cardColor: isLight ? "bg-white border-gray-100" : "bg-slate-800 border-slate-700",
        titleColor: isLight ? "text-gray-800" : "text-gray-200",
        importantTextColor: isLight ? "text-blue-600" : "text-blue-400",
        textPrimaryColor: isLight ? "text-gray-700" : "text-gray-300",
        textSecondaryColor: isLight ? "text-gray-600" : "text-gray-400",
        segmentBgColor: isLight ? 'bg-slate-200' : 'bg-slate-700',
        buttonColor: `${isLight ? 'from-blue-600' : 'from-blue-500'} from-10%
                        ${isLight ? 'via-purple-600' : 'via-purple-500'} via-75%
                        ${isLight ? 'to-pink-600' : 'to-pink-500'} to-110%`
    };
}

export default useTailwindColorScheme;
