import React from 'react'
import './hero.css'
import {connect} from 'react-redux';

const Hero = ({name, events, imgAdress, ext, match, heroes}) => {
  // const {heroes} = this.props
  console.log(heroes);
  if (!match) {
    return (
      <div className='hero-card'>
        <img src={`${imgAdress}.${ext}`}/>
        <div className='hero-info'>
          <div>{name}</div>
          {/* {events
            .slice(0, 3)
            .map((event, index) => (
              <div key={index}>{event.name}</div>
            ))} */}
        </div>
      </div>
    )
  } else {
    var result = heroes.find(obj => {
      // console.log(obj.id);
      return obj.id == match.params.id
    })
    console.log(match.params.id);
    return (
    <h1>{result.name}</h1>
    )
  }

}

const mapStateToProps = state => ({heroes: state.heroes});

export default connect(mapStateToProps)(Hero)
