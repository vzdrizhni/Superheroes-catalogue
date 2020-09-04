import React from "react";
import {connect} from 'react-redux';

const HeroesList = ({heroes}) => {
    console.log({heroes});
  return (
  <div className='hero'>{heroes.map(hero => {
      console.log(hero.name);
    return <div>{hero.name} </div>
  })}</div>
  )
}

const mapStateToProps = state => ({heroes: state});

export default connect(mapStateToProps)(HeroesList);