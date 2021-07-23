import React, { useState } from 'react';
import Header from './Header'
import CardList from './CardList'
import Form from './Form'
import CardDisplay from './CardDisplay'
import Grid from '@material-ui/core/Grid'

export default function App() {

  const [cardlist, setCardList] = useState([])
  const [currentCard, setCurrent] = useState({})

  const updateList = list => {
    setCardList(list)
  }

  const setCurrentCard = card => {
    setCurrent(card)
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={4}>
        <Form onSubmit={updateList} />
      </Grid>
      <Grid item xs={4}>
        <CardList
          setCurrentCard={setCurrentCard}
          cardlist={cardlist}
        />
      </Grid>
      <Grid item xs={4}>
        <CardDisplay card={currentCard} />
      </Grid>
    </Grid>
  );
}