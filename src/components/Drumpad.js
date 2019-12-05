import React from 'react'

export default function Drumpad(props) {

   

    return (
        <div className="drum-pad" id="props.id" >
            <p>{props.letter} </p>
            <audio id={props.letter} 
            src={props.src} 
            className="clip"
            ref={ref => this.audio = ref}
            ></audio>
        </div>
    )
}

