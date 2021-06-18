const styles = (theme) => ({
    videorow: {
        display: 'flex',
        marginBottom: '30px',
        maxWidth: '700px',
        '& img': {
            objectFit: 'contain',
            width: '246px',
            height: '138px',
        }
    },
    videorowText: {
        marginLeft: '14px',
        '& h3': {
            color: theme.palette.type === 'dark' ? '#FFF' : '#000',
        }
    },
    videorowHeadline: {
        fontSize: '12px',
        color: '#606060',
    },
    videorowDiscription: {
        marginTop: '12px',
        color: theme.palette.type === 'dark' ? '#AAAAAA' : '#606060',
        fontSize: '12px',
    }
})

export default styles
