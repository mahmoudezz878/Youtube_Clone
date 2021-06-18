const styles = (theme) => ({
    recommendedvideos: {
        flex: '1',
        backgroundColor: theme.palette.type === 'dark' ? '#181818' : '#f9f9f9',
        paddingLeft: '20px',
        paddingBottom: '0',
        '& h2': {
            marginLeft: '5px',
            marginBottom: '20px',
        }
    },
    recommendedvideosVideos: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    loading: {
        margin: 'auto',
        display: 'block !important',
    },
    recommendedvideosLink: {
        textDecoration: 'none',
        color: theme.palette.type === 'dark' ? '#FFF' : '#000',
    }

})

export default styles
