import { makeStyles } from '@material-ui/core/styles';
import './Product.css'

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    backgroundColor: '#303030',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  productName: {
    fontFamily: 'Orbitron',
    fontWeight: '900',
    color: 'white',
  },
  price: {
    color: '#43ff88',
    fontFamily: 'VT323',
    fontWeight: '900',
  },
  description: {
    fontFamily: 'Orbitron',
    fontWeight: '900',
    color: 'white',
  },
  cart: {
    color: 'white',
  },
}));
