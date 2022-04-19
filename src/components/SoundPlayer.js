//Import useState 
import React, { useState } from 'react';

import mp3_file from './JeopardyTheme.mp3'

// Import font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeXmark, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

function SoundPlayer() {

    const [soundOn, setSoundOn] = useState(false)

    const handleSound = function() {
        setSoundOn(!soundOn)
    }

    return (
        <div className="iconContainer">
            <button className='soundToggle' onClick={handleSound}>
                {soundOn == false ? 
                    <FontAwesomeIcon icon={faVolumeXmark} />
                    :
                    <React.Fragment>
                        <FontAwesomeIcon icon={faVolumeHigh} />
                        <audio src={mp3_file} autoPlay></audio>
                    </React.Fragment>
                }
            </button>
        </div>
    )
}

export default SoundPlayer; 