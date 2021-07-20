import { makeStyles } from '@material-ui/core/styles';
import './Cart.css'

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
    fontFamily: 'Orbitron',
    color: 'white',
  },
  emptyButton: {
    minWidth: '150px',
    fontFamily: 'Orbitron',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    fontFamily: 'Orbitron',
    minWidth: '150px',
  },
  link: {
    // textDecoration: 'none',
    color: 'white',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: 'Orbitron',
    fontWeight: '900',
    fontSize: '25px',
    color: 'white',
  },
  number: {
    fontFamily: 'VT323',
    fontWeight: '900',
  },
}));
