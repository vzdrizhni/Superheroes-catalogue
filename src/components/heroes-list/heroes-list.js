import React from "react";
import {connect} from 'react-redux';
import {fillWithHeroes} from "../../actions";
import MarvelHeroes from "../../services/marvel-api-client";
import Hero from "../heroes/hero";

class HeroesList extends React.Component {

  marvelHeroes = new MarvelHeroes();

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props.heroes);
    this.marvelHeroes.getAllCharacters().then(body => this.props.fillWithHeroes(body))
  }

  render() {
    const { heroes } = this.props
    console.log(heroes);
    return (
      <div className='hero'>{heroes.map(hero => {
          return <Hero name={hero.name} events={hero.series.items} imgAdress={hero.thumbnail.path} ext={hero.thumbnail.extension}  />
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({heroes: state});

const mapDispatchToProps = dispatch => ({
  fillWithHeroes: heroes => dispatch(fillWithHeroes(heroes))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroesList);