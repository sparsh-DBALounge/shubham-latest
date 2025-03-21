"use client";

const Footer = () => {
    let date = new Date()
    const year = date.getFullYear()
    return (
        <footer>
            Copyright@{year} Shubham Housing Finance. All Rights Reserved.
        </footer>
    )
}

export default Footer