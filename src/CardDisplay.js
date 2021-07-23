import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    display: {
        width: '100%',
        maxWidth: 360,
        height: 360,
        backgroundColor: theme.palette.background.paper,
    },
    container: {
        minHeight: 360
    }
}));

const CardDisplay = props => {

    const styles = useStyles()
    const { card } = props;

    const displayCard = card => {
        return (<img id='current-card' src={card.imageUrl} alt=''></img>);
    };

    return (
        <Container className={styles.container}>
            <div className={styles.display}>
                {card && displayCard(card)}
            </div>
        </Container>
    );
};

export default CardDisplay