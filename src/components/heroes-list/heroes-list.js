import React from "react";
import {connect} from 'react-redux';
import {filterHeroes} from "../../actions";
import Hero from "../heroes/hero";
import SearchBox from '../search-box/search-box'
import './heroes-list.css'

class HeroesList extends React.Component {

  handleChange = (e) => {
    this.props.filterHeroes(e.target.value);
  }

  render() {
    const {heroes} = this.props
    console.log(heroes);
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
    filterHeroes: value => dispatch(filterHeroes(value))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroesList);