import { makeStyles } from '@material-ui/core/styles';
import './CartItem.css'

export default makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Orbitron',
    fontWeight: '900',
    fontSize: '25px',
  },
  number: {
    fontFamily: 'VT323',
    fontWeight: '900',
  },
}));
