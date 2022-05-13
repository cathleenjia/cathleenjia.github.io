import React from 'react';
import * as Scroll from 'react-scroll';
import '../App.css';


class TableOfContents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
    }
  }

  handleMouseEnter = () => {
    this.setState({ hidden: false })
  }

  handleMouseLeave = () => {
    this.setState({ hidden: true })
  }

  handleClick = (e) => {
    // const { target: { value }} = e;

    console.log(e);
  }

  render() {
    const { hidden } = this.state;

    return (
      <div className="table-of-contents" onMouseOver={this.handleMouseEnter} onMouseOut={this.handleMouseLeave}>
        { this.props.items.map((item, index) => {
          return (
            <Scroll.Link activeClass="active" to={''+index} spy={true} smooth={true} offset={-50} duration={500}>
              <div className={`${hidden ? 'toc-item slide-out' : ''}`}></div>
              <p className={`toc-name ${hidden ? 'hidden' : 'slide-in'}`}>{ item }</p>
            </Scroll.Link>
          )
        }) }
      </div>
    )
  }
};

export default TableOfContents
