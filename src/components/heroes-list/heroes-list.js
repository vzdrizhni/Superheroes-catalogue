import React from "react";
import {connect} from 'react-redux';
import {filterHeroes} from "../../actions";
import Hero from "../heroes/hero";
import SearchBox from '../search-box/search-box'
import './heroes-list.css'
import {Link} from "react-router-dom";

class HeroesList extends React.Component {

  handleChange = (e) => {
    this.props.filterHeroes(e.target.value);
  }

  render() {
    const {heroes, filter} = this.props
    const filteredHeroes = heroes.filter(hero => hero.name.toLowerCase().includes(filter.toLowerCase()))
    return (
      <div>
        <SearchBox placeholder='search heroes' handleChange={this.handleChange} />
        <div className='hero'>
          {filteredHeroes.map((hero, index) => (
            <Link to={`/${hero.id}`} key={hero.id}>
            <Hero
            key={index}
            name={hero.name}
            events={hero.series.items}
            imgAdress={hero.thumbnail.path}
            ext={hero.thumbnail.extension}
            id = {hero.id}
            heroes={filteredHeroes}
          />
          </Link>)
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({heroes: state.heroes, filter: state.filter});

const mapDispatchToProps = dispatch => {
  return {
    filterHeroes: value => dispatch(filterHeroes(value))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroesList);