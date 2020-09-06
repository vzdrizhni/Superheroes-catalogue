import React from "react";
import {connect} from 'react-redux';
import {fillWithHeroes, filterHeroes} from "../../actions";
import MarvelHeroes from "../../services/marvel-api-client";
import Hero from "../heroes/hero";
import SearchBox from '../search-box/search-box'
import './heroes-list.css'

class HeroesList extends React.Component {

  marvelHeroes = new MarvelHeroes();

  // componentDidMount() {
  //   this
  //     .marvelHeroes
  //     .getAllCharacters()
  //     .then(body => this.props.fillWithHeroes(body))
  // }

  handleChange = (e) => {
    this.props.filterHeroes(e.target.value);
    console.log(this.props.heroes);
  }

  render() {
    const {heroes} = this.props
    return (
      <div>
        <SearchBox placeholder='search heroes' handleChange={this.handleChange} />
        <div className='hero'>
          {heroes.map((hero, index) => (<Hero
            key={index}
            name={hero.name}
            events={hero.series.items}
            imgAdress={hero.thumbnail.path}
            ext={hero.thumbnail.extension}
            />))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({heroes: state});

const mapDispatchToProps = dispatch => {
  return {
    fillWithHeroes: heroes => dispatch(fillWithHeroes(heroes)),
    filterHeroes: value => dispatch(filterHeroes(value))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroesList);