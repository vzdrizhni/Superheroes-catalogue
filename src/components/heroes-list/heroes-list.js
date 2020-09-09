import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {filterHeroes, fillWithHeroes} from '../../actions/index';
import Hero from '../heroes/hero';
import SearchBox from '../search-box/search-box';
import MarvelHeroes from "../../services/marvel-api-client";
import './heroes-list.css';

class HeroesList extends React.Component {
  marvelHeroes = new MarvelHeroes();

  componentDidMount() {
    this
      .marvelHeroes
      .getAllCharacters()
      .then(body => this.props.fillWithHeroes(body))
  }

  handleChange = e => {
    const {filterHeroes} = this.props;
    filterHeroes(e.target.value);
  }

  render() {
    const {heroes, filter} = this.props;
    let filteredHeroes = [];
    if (heroes.length > 0) {
      filteredHeroes = heroes.filter(hero => hero.name.toLowerCase().includes(filter.toLowerCase())); // eslint-disable-line react/prop-types
    }
    return (
      <div>
        <SearchBox placeholder="search heroes" handleChange={this.handleChange}/>
        <div className="hero">
          {filteredHeroes.map((hero, index) => (
            <Link to={`/Superheroes-catalogue/${hero.id}`} key={hero.id}>
              <Hero
                key={hero.id}
                name={hero.name}
                events={hero.series.items}
                imgAdress={hero.thumbnail.path}
                ext={hero.thumbnail.extension}
                id={hero.id}/>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({heroes: state.heroes, filter: state.filter});

const mapDispatchToProps = dispatch => ({
  filterHeroes: value => dispatch(filterHeroes(value)),
  fillWithHeroes: value => dispatch(fillWithHeroes(value))
});

HeroesList.propTypes = {
  filterHeroes: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  heroes: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroesList);
