import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import Header from './Header'
import CardList from './CardList'
import Form from './Form'
import CardDisplay from './CardDisplay'

export default function App() {

  const [cardlist, setCardList] = useState([])
  const [currentCard, setCurrent] = useState({})

  const updateList = list => {
    setCardList(list)
  }

  const setCurrentCard = e => {
    console.log(e)
    const card = e.target.value
    console.log(card)
    // setCurrent(card)
  }

  return (
    <Container>
      <Header />
      <Form
        onSubmit={updateList}
      />
      <CardList
        setCurrentCard={setCurrentCard}
        cardlist={cardlist}
      >
      </CardList>
      <CardDisplay currentCard={currentCard}/>
    </Container>
  );
}