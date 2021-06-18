const styles = (theme) => ({
    sidebare: {
        flex: '.18',
        backgroundColor: theme.palette.type === 'dark' ? '#212121' : '#FFF',
        '& hr': {
            height: '1px',
            border: '0',
            backgroundColor: '#606060',
        },
        '& a': {
            textDecoration: 'none',
        }
    },
    hidesidebar: {
        display: 'none',
    }
})

export default styles
