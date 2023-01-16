import React, {useEffect, useState} from 'react';

const KeysTracker = () => {

    const [text, setText] = useState('')

    console.log('component rendered with' + text)

    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }

    }, [text])

    return (
        <div>
            Typed text: {text}
        </div>
    );
};

export default KeysTracker;