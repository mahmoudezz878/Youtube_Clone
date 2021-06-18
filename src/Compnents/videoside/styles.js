const styles = (theme) => ({
    videoside: {
        paddingTop: '24px',
        paddingRight: '24px',
        backgroundColor: theme.palette.type === 'dark' ? '#181818' : '#f9f9f9',
    },
    loading: {
        margin: 'auto',
        display: 'block !important',
    },
    recommendedvideosLink: {
        textDecoration: 'none',
        color: theme.palette.type === 'dark' ? '#FFF' : '#000',
    },
})

export default styles
