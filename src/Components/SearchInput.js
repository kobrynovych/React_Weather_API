import React from 'react';
import {
  withStyles,
  makeStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: '3px solid red',
        borderRadius: '15px',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  margin: {
    margin: theme.spacing(1),
    width: '320px',
  },
}));


const SearchInput = React.memo(({ onChange, onClick, value }) => {

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>
    <CssTextField
        className={classes.margin}
        label="Search weather..."
        variant="outlined"
        id="custom-css-outlined-input"
        onChange={(event) =>
            onChange(event)
        }
        onKeyPress={(event) => {
            // if (event.ctrlKey && event.key === 'Enter') {
            if (event.key === "Enter") {
                event.preventDefault();
                onClick();
            }
        }}
        value={value}
      />
    </form>
  );
});

export default SearchInput;