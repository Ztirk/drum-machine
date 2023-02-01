function App() {
    const drumPads = [
        {
          keyCode: 81,
          text: "Q",
          src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        },
        {
          keyCode: 87,
          text: "W",
          src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
        },
        {
          keyCode: 69,
          text: "E",
          src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
        },
        {
          keyCode: 65,
          text: "A",
          src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
        },
        {
          keyCode: 83,
          text: "S",
          src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
        },
        {
          keyCode: 68,
          text: "D",
          src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
        },
        {
          keyCode: 90,
          text: "Z",
          src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
        },
        {
          keyCode: 88,
          text: "X",
          src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
        },
        {
          keyCode: 67,
          text: "C",
          src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
        }
      ];

    const [show, setShow] = React.useState('')

    React.useEffect(() => {
        document.addEventListener('keydown', (e) => handleClick(e.key.toUpperCase()))
    }, [])

    const handleClick = (e) => {
        document.getElementById(e).play()
        setShow(e)
    }

    return (
        <div className='vh-100 vw-100 d-flex justify-content-center align-items-center flex-column'>
            <div>Press key on your keyboard</div>
            <div>Active Key: <span className='fs-2'>{show}</span></div>
            <div className='bg-dark d-flex justify-content-center align-items-center rounded' style={{width: '350px', height: '350px'}}>
                <div className='text-white grid row bg-primary justify-content-center rounded ' style={{width: '300px', height: '300px'}}>
                    {drumPads.map((drumPad) =>
                    <div className='col-4 border border-secondary d-flex align-items-center justify-content-center' onClick={() => handleClick(drumPad.text)}>{drumPad.text}
                        <audio src={drumPad.src} id={drumPad.text}></audio>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))