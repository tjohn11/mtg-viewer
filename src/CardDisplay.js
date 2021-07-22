import { Container } from '@material-ui/core';

const CardDisplay = props => {

    const { card } = props;

    const displayCard = card => {
        console.log('card', card);
    };

    return (
        <Container>
            <div>
                {card && displayCard(card)}
            </div>
        </Container>
    );
};

export default CardDisplay