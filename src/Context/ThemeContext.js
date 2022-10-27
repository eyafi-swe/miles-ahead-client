import React, { createContext, useState } from 'react';


export const DarkToggleContext = createContext();
const ThemeContext = ({children}) => {
    const [dark,setDark] = useState(false);

    const themeInfo = {dark,setDark};
    return (
        <DarkToggleContext.Provider value={themeInfo}>
            {children}
        </DarkToggleContext.Provider>
    );
};

export default ThemeContext;