import React from 'react'

const styles = (theme) => ({
    smallsidebar: {
        backgroundColor: theme.palette.type === 'dark' ? '#212121' : '#FFF',
        '& a': {
            textDecoration: 'none',
        },
        '& h2': {
            fontSize: '10px',
            fontWeight: '400',
            marginLeft: '0',
        },
        '& div': {
            display: 'flex',
            flex: '.17',
            flexDirection: 'column',
            padding: '21px 7px',
        },
        '& svg': {
            marginRight: '0',
        }
    },
    hidesmallsidebar: {
        display: 'none',
    }
})

export default styles
