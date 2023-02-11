import { useState } from 'react';

interface toggle{
    value:boolean,
    setValue:void
}

const useToggle = () => {
    const [value, setValue] = useState<toggle | any>(true)

    const setToggle = ()=>{
        setValue(!value)
    }

  return [value, setToggle]
}

export {useToggle}