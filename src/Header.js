import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    cntr: {
      margin: theme.spacing(1),
    }
  }))

const Header = () => {
    
    const styles = useStyles()

    return (
        <Container className={styles.cntr}>
            <h1>Magic The Gathering Card Looker Upper</h1>
        </Container>
    )
}

export default Header