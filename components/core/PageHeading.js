import { icons } from '@/env/icons'
import React from 'react'
import AdminAction from '@/components/core/adminAction'

const PageHeading = (props) => {
    const {
        heading = "",
        subHeading = "",
        dashboardCommentsLength = "",

        showSearchInput = true,
        placeholder = "Search",
        searchClassName = "",
        searchQuery = "",
        setSearchQuery = () => { },

        className = "",
        btns = [],
        buttons = [],
        searchBtns = [],
        bypassSecurity = false
    } = props
    return (
        <div className={`page-heading-container ${className}`}>
            <div className="page-heading">
                <div>
                    <h2>{heading}</h2>
                    {subHeading && <p>{subHeading}</p>}
                </div>
                <AdminAction bypassSecurity={bypassSecurity}>
                    <div className='action-btns isDesktopOnly'>
                        {btns?.map((btn, idx) => {
                            return (
                                <button className={(btn.label === 'Chat' && heading === 'Dashboard' && dashboardCommentsLength > 0) ? 'btn-outline-notification' : btn.className}
                                    key={`${heading}_page-heading-action-btn__${idx}`}
                                    onClick={btn.onClick}
                                >
                                    {btn.icon && <img src={btn.icon} alt={btn.label} />}
                                    {btn.label}
                                </button>
                            )
                        })}
                    </div>
                    <div className='action-btns isMobileOnly'>
                        {buttons?.map((btn, idx) => {
                            return (
                                <button className={btn?.className}
                                    key={`${heading}_page-heading-action-btn__${idx}`}
                                    onClick={btn.onClick}
                                >
                                    {btn.icon && <img src={btn.icon} alt={btn.label} />}
                                    {btn.label}
                                </button>
                            )
                        })}
                    </div>
                </AdminAction>
            </div>

            <hr />

            {showSearchInput && <div className={"search-input " + searchClassName}>
                <div className="search-input-form">
                    <div className='searchByQuery-form'>
                        <input
                            type="text"
                            placeholder={placeholder}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type='submit'>
                            <img src={icons.Icon18} alt="search" />
                        </button>
                    </div>
                </div>
                <AdminAction bypassSecurity={bypassSecurity}>
                    <div className='action-btns isDesktopOnly'>
                        {searchBtns?.map((btn, idx) => {
                            return (<button className={btn?.className} key={`${heading}_page-search-heading-action-btn__${idx}`} onClick={btn.onClick}>
                                {btn.icon && <img src={btn.icon} alt={btn.label} />}
                                {btn.label}
                            </button>)
                        })}
                    </div>
                </AdminAction>
            </div>}
        </div>
    )
}

export default PageHeading