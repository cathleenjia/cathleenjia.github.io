import React from 'react';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    this.props.setContext(ctx);
  }


  render() {
    return(
      <div>
        <canvas ref="canvas" className="myCanvas" width={window.innerWidth} height={window.innerHeight}/>
      </div>
    )
  }
}
export default Canvas
