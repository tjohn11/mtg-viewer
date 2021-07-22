import { TextField, Select, Button, InputLabel, MenuItem, FormControl, Container } from '@material-ui/core';
import { useForm } from './useForm';
import { makeStyles } from '@material-ui/core/styles'
import { querySet, queryCard } from './utils/mtg'

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200
    },
    inputStyles: {
      margin: theme.spacing(1)
    },
    btnStyles: {
      margin: theme.spacing(1),
      minHeight: 56
    }
  }))

const Form = (props) => {

  const styles = useStyles()

  const [values, handleChange] = useForm({ query: '', type: ''})

  const submitQuery = () => {
    if (values.type === 'Set') {
      querySet(values.query, props.onSubmit)
    }
    else if (values.type === 'Card') {
      queryCard(values.query, props.onSubmit)
    }
    else if (values.type === 'SuperType') {
      queryCard(values.query, props.onSubmit)
    }
  }

return (
    <Container maxWidth='xl'>
        <TextField
        name='query'
        id="text-query"
        label="Search for Card/Set"
        variant="outlined"
        className={styles.inputStyles}
        value={values.query}
        onChange={handleChange} />
        <FormControl variant="outlined" className={styles.formControl}>
        <InputLabel id="query-type-label">Search Type</InputLabel>
        <Select
            labelId="query-type-label"
            name='type'
            id="demo-simple-select-outlined"
            value={values.type}
            onChange={handleChange}
            label="Search Type"
        >
            <MenuItem value={'Set'}>Set</MenuItem>
            <MenuItem value={'Card'}>Card</MenuItem>
        </Select>
        </FormControl>
        <Button
        variant="contained"
        className={styles.btnStyles}
        color="primary"
        onClick={submitQuery}>
        Search For Cards
        </Button>
    </Container>
    );
}

export default Form;