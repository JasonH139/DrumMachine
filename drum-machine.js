const clips = [
  {
    Key : "Q",
    clipName : "Heater 1",
    link : "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    Key : "W",
    clipName : "Heater 2",
    link : "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    Key : "E",
    clipName: "Heater 3",
    link : "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    Key : "A",
    clipName : "Heater 4",
    link : "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    Key : "S",
    clipName : "Clap",
    link : "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    Key : "D",
    clipName : "Open-HH",
    link : "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    Key : "Z",
    clipName : "Kick-n'-Hat",
    link : "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    Key : "X",
    clipName : "Kick",
    link : "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    Key : "C",
    clipName : "Clossed-HH",
    link : "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

const e = React.createElement;

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSound : "Press A Key"
    };
    this.drumPad = this.drumPad.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playClip = this.playClip.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(e){
    this.playClip(e.key.toUpperCase())
  }
  
  playClip(key){
    console.log(key)
    const audio = document.getElementById(key);
    if(audio == null){
      this.setState({
        activeSound : "Not An Option"
      })
    } else{
      audio.play();
      this.setState({
        activeSound : document.getElementById(key).parentElement.id
      })
    }
  }

  drumPad(clip) {
    return (
      <div onClick={() => this.playClip(clip.Key)} className="drum-pad" id = {clip.clipName}>
        <audio className="clip" id={clip.Key} src={clip.link}/>
        {clip.Key}
      </div>
    );
  }

  render() {
    return(
            <div id="drum-machine">
              <div id = "keys">
                  {clips.map((clip) => (
                    this.drumPad(clip)
                  ))}
              </div>
              <div id="controller">
                  <div className="" id="display">{this.state.activeSound}</div>
              </div>
            </div>
    );
  }
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(DrumMachine));
