// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleBitrateClick() {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    }, ()=>(console.log("updated bitrate")))
  }

  handleResolutionClick() {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    }, ()=>(console.log("updated resolution")))
  }

  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.handleBitrateClick.bind(this)}>Bitrate</button>
        <button className='resolution' onClick={this.handleResolutionClick.bind(this)}>Resolution</button>
      </div>
    )
  }
}
