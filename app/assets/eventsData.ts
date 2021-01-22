import { IEvents } from '../models/data/events';
export const EventsList: IEvents[] = [
  {
  id: 1,
  name: 'Metallica Concert',
  fees: 100,
  entryType: 'Paid',
  location: 'Palace Grounds',
  image: 'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1519627962%2Fvltlogy23k1iid9pjffx.jpg'
  },
  {
  id: 2,
  name: 'Saree Exhibition',
  fees: 0,
  entryType: 'Free',
  location: 'Malleswaram Grounds',
  image: 'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1519627962%2Fvltlogy23k1iid9pjffx.jpg'
  },
  {
  id: 3,
  name: 'Wine tasting',
  fees: 150,
  entryType: 'Paid',
  location: 'Links Brewery',
  image: 'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1519627962%2Fvltlogy23k1iid9pjffx.jpg'
  },
  {
  id: 4,
  name: 'Startups Meet',
  fees: 100,
  entryType: 'Paid',
  location: 'Kanteerava Indoor Stadium',
  image: 'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1519627962%2Fvltlogy23k1iid9pjffx.jpg'
  },
  {
    id: 5,
    name: 'Startups Meet',
    fees: 100,
    entryType: 'Paid',
    location: 'Kanteerava Indoor Stadium',
    image: 'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1519627962%2Fvltlogy23k1iid9pjffx.jpg'
  },
  {
    id: 6,
    name: 'Summer Noon Party',
    fees: 100,
    entryType: 'Paid',
    location: 'Kumara Park',
    image: 'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1519627962%2Fvltlogy23k1iid9pjffx.jpg'
  }
]

export const getEventNameById = (id: number) => { 
  const eventIndex = EventsList.findIndex((row) => row.id === id);
  
  return eventIndex > -1 ? EventsList[eventIndex].name : ''
}