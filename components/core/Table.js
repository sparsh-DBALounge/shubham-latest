import React from 'react'

const Table = ({ header = [], alignRightHeader = [], children, className = "" }) => {
    return (
        <div className={`table-responsive table-container ${className}`}>
            <table className='table'>
                <thead>
                    <tr>
                        {header.map((h, idx) => (<th key={`table-header__${idx}`}>{h}</th>))}
                        {alignRightHeader.map((h, idx) => (<th key={`rl-table-header__${idx}`} className='right-align'>{h}</th>))}
                    </tr>
                </thead>

                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    )
}

export default Table