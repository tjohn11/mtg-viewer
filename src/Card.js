import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import VisibilityIcon from '@material-ui/icons/Visibility';

export const Card = props => {

    const { card, clickHandler } = props

    const handleClick = () => {
        clickHandler(card)
      }

    return (
        <div onClick={handleClick}>
            <ListItem button>
            <ListItemIcon>
                <VisibilityIcon/>
            </ListItemIcon>
            <ListItemText primary={card.name} secondary={card.setName} />
            </ListItem>
            <Divider/>
        </div>
    )
}