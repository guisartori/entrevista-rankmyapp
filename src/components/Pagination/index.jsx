import React from 'react'
import './styles.css'

const Pagination = ({next, prev, changePage}) => {
    const handleClick = e => {
        e.preventDefault()
        console.log('eae')
    }

    return (
        
        <div className="pagination">
            <button className="item" href={prev} onClick={handleClick}>
                {'<<<'} Voltar
            </button>
            <button className="item" href={next}>
                Próximo {'>>>'}
            </button>
        </div>
        
    )
}

export default Pagination