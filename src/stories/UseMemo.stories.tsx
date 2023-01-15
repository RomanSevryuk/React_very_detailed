import React, {useCallback, useMemo} from 'react';
import {useState} from "react";

export default {
    title: 'useMemo'
}


export const DifficultCountingExample = () => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let resultTemp = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }

            resultTemp *= i
        }
        return resultTemp
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>

}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS')
    return <div>
        {
            props.users.map((el, i) => <div key={i}>{el}</div>)
        }
    </div>
}

const Users = React.memo(UsersSecret)

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['HTML', 'React', 'CSS'])

    const newArray = useMemo(()=>{
       return  books.filter(el => el.toLowerCase().indexOf('a') > -1)
    }, [books])

    const addBooks = () => {
        setBooks([...books, 'Angular'])
    }

    const memoizedAddBooks = useMemo(()=> {
        return addBooks
    }, [books])

    const memoizedAddBooks2 = useCallback(()=> {
        setBooks([...books, 'Angular'])
    }, [books])

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        {counter}
        <Book books={newArray} addBooks={memoizedAddBooks2}/>
    </>
}

const BooksSecret = (props: { books: Array<string>; addBooks: () => void }) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={props.addBooks}>add</button>
        {
            props.books.map((el, i) => <div key={i}>{el}</div>)
        }
    </div>
}

const Book = React.memo(BooksSecret)
