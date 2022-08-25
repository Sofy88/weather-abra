
const baseTheme = {
    black : "#22222",
    white : "#fffff",
    primary : "#48bae4",
    secondary : "#444e72"
}
 const lightMode = {
    primary : "#48bae4"
 }

 const darkMode = {
    primary : "#1a2b55"
 }

 const lightModeTheme = {...baseTheme, ...lightMode};
 const darkModeTheme = {...baseTheme, ...darkMode}
 
 export default lightModeTheme;