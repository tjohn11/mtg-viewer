import { card } from 'mtgsdk'

export const querySet = (query, setList) => {
    card.where({ setName: query })
    .then(cards => {
        setList(cards)
    })
    .catch(err => {
        console.log(err)
    })
}

export const queryCard = (query, setList) => {
    card.where({ name: query })
    .then(cards => {
        setList(cards)
    })
    .catch(err => {
        console.log(err)
    })
}