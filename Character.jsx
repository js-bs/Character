import React from 'react'

class Character extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    let letter = String.fromCharCode(this.props.letter);
    if(this.props.isCapital){
      letter = letter.toUpperCase();
    }
    return (
      <span>
        {letter}
      </span>
    );
  }

}

Character.propTypes = {
  letter: React.PropTypes.string,
  isCapital: React.PropTypes.bool,
};

export default Character;
