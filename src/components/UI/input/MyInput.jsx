import React from 'react';
import classes from './MyInput.module.css';
// export const MyInput = React.forwardRef((props, ref) => {
//   return <input ref={ref} className={classes.myInput} {...props} />;
// });
export const MyInput = (props) => {
  return <input className={classes.myInput} {...props} />;
};
