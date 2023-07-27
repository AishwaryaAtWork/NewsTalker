import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
    media: {
        height: 190,
      },
      border: {
        border: 'solid',
      },
      fullHeightCard: {
        height: '100%',
      },
      card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '10px solid white',
        maxHeight: 500 ,
      },
      activeCard: {
        borderBottom: '10px solid #22289a',
      },
      grid: {
        display: 'flex',
      },
      details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
      },
      title: {
        padding: '0 16px',
        display: '-webkit-box',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
        overflow : "hidden",
        textOverflow : "ellipsis"
      },
      description: {
        display: '-webkit-box', 
        '-webkit-line-clamp': 2, 
        '-webkit-box-orient': 'vertical',
        overflow : "hidden", 
        textOverflow : "ellipsis"},
      cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
      },
});