import { useState } from 'react';

const useDivInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const onValueChangeHandler  = (event) => setValue(event.target.innerHTML);

  return [value, onValueChangeHandler];
};

export default useDivInput;
