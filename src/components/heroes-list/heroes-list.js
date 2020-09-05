import React from "react";
import {connect} from 'react-redux';
import {fillWithHeroes} from "../../actions";
import MarvelHeroes from "../../services/marvel-api-client";

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
    return (
      <div className='hero'>{heroes.map(hero => {
          return <div>{hero.name}
          </div>
        })}</div>
    )
  }
}

const mapStateToProps = state => ({heroes: state});

const mapDispatchToProps = dispatch => ({
  fillWithHeroes: heroes => dispatch(fillWithHeroes(heroes))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroesList);