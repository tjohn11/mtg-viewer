import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import VisibilityIcon from '@material-ui/icons/Visibility';

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
        const elementList = cardlist.map((item, i) => {
            const setCurrent = item => { setCurrentCard(item) }
            return (
                <div key={i}>
                    <ListItem button key={`li_${i}`} onClick={setCurrent}>
                    <ListItemIcon key={`lii_${i}`}>
                        <VisibilityIcon key={`vi_${i}`}/>
                    </ListItemIcon>
                    <ListItemText key={`lit_${i}`} primary={item.name} secondary={item.setName} />
                    </ListItem>
                    <Divider key={`div_${i}`}/>
                </div>
            )
        });
        return elementList
        // console.log(elementList)
    }
    
    return (
        <Container className={listStyles.container}>
            <div className={listStyles.item}>
                <List component="nav" aria-label="main mailbox folders">
                    {cardlist ? renderList(cardlist) : null}
                </List>
            </div>
        </Container>
    )
};

export default CardList;