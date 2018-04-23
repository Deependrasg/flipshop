import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
// import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import StarBorder from 'material-ui-icons/StarBorder';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Image1 from '../../static/img/slider1.jpg'
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '19px',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const PaperStyle = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const tilesData = [
  {
    img: require('../../static/img/Flipkart-mobile-app-se-shopping-kaise-kare.png'),
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: require('../../static/img/flipkart2.jpg'),
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: require('../../static/img/coupon.png'),
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: require('../../static/img/electronic.jpg'),
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: require('../../static/img/flipkart2.jpg'),
    title: 'Hats',
    author: 'Hans',
  },
];


const GridListExampleSingleLine = () => (
<MuiThemeProvider>
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
</MuiThemeProvider>
);

export default GridListExampleSingleLine;