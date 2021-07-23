import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import { Card } from './Card';

const useStyles = makeStyles((theme) => ({
    item: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    container: {
        minHeight: 200
    }
}));


const CardList = props => {
    const listStyles = useStyles();
    const { cardlist } = props
    const { setCurrentCard } = props

    const renderList = cardlist => {
        const elementList = cardlist.map((card, i) => {
            return (
                <Card key={i} card={card} clickHandler={setCurrentCard}>
                </Card>
            )
        });
        return elementList
    }
    
    return (
        <Container className={listStyles.container}>
            <div className={listStyles.item}>
                <List component="nav" aria-label="main mailbox folders" className='grid-column'>
                    {cardlist ? renderList(cardlist) : null}
                </List>
            </div>
        </Container>
    )
};

export default CardList;