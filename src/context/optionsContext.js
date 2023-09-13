import React, { createContext, useState } from "react";


export const OptionsContext = createContext();

export const OptionProvider = ({children}) => {

    const [firstOption, setFirstOption] = useState('')
    const [secondOption, setSecondOption] = useState('')
    const [thirdption, setThirdOption] = useState('')

    return (
        <OptionsContext.Provider
            value={{
                firstOption, setFirstOption,
                secondOption, setSecondOption,
                thirdption, setThirdOption
            }}
        >
            {children}
        </OptionsContext.Provider>
    )
}