import React from 'react';
import './hero.css';
import { connect } from 'react-redux';

const Hero = ({
  name,
  imgAdress,
  ext,
  match,
  heroes,
}) => {
  if (!match) {
    return (
      <div className="hero-card">
        <img src={`${imgAdress}.${ext}`} alt={ext} />
        <div className="hero-info">
          <div>{name}</div>
        </div>
      </div>
    );
  } else { // eslint-disable-line no-else-return
    const result = heroes.find(obj => obj.id == match.params.id); // eslint-disable-line eqeqeq
    const { name } = result;
    const events = result.series.items;
    const imgAdress = result.thumbnail.path;
    const ext = result.thumbnail.extension;
    const { description } = result;
    return (
      <div className="hero-card-single">
        <img src={`${imgAdress}.${ext}`} alt={ext} />
        <div className="hero-description">
          <h1>
            Name:
            {name}
          </h1>
          <p>
            Description:
            {description}
          </p>
          {events
            .slice(0, 3)
            .map(event => (
              <div key={Math.random()}>
                Event:
                {event.name}
              </div>
            ))}
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({ heroes: state.heroes });

export default connect(mapStateToProps)(Hero);
