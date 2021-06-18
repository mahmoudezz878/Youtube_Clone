const styles = (theme) => ({
    searchpage: {
        flex: '1',
        backgroundColor: theme.palette.type === 'dark' ? '#181818' : '#f9f9f9',
        padding: '16px 24px',
        paddingBottom: '0',
        '& hr': {
            height: '1px',
            border: '0',
            marginTop: '10px',
            marginBottom: '10px',
        },
        '& a': {
            textDecoration: 'none',
            color: '#000',
        }
    },

    searchpageFilter: {
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.type === 'dark' ? '#AAAAAA' : '#606060',
        fontSize:' xx-small !important',
        '& h2': {
            marginLeft: '10px',
            color: theme.palette.type === 'dark' ? '#AAAAAA' : '#606060',
        },
    },

})

export default styles
