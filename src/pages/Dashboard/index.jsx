import React, { useEffect, useState } from 'react'
import './styles.css'
import Character from '../../components/Character'
import api from '../../services/api'
import Pagination from '../../components/Pagination'
import useEffectAsync from './useEffectAsync'

const Dashboard = () => {
    const [characters, setCharacters] = useState([])
    const [nextPag, setNextPage] = useState('')
    const [prevPag, setPrevPage] = useState('')

    useEffectAsync(async () => {
        const { data: { results } } = await api.get('/character')
        setCharacters(results)
    }, [])

    const handleChangePage = (url) => {

    }
    

    return (
        <div className="container">
            {
                characters.map(character => 
                    <Character charInfos={character} key={character.id}/>
                )
            }
            {/* <Pagination next={nextPag} prev={prevPag} changePage={handleChangePage} /> */}
        </div>
    )
}

export default Dashboard