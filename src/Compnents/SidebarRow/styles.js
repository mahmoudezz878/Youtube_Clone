const styles = (theme) => ({
    sidebarrow: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 20px',
        cursor: 'pointer',
        backgroundColor: theme.palette.type === 'dark' ? '#212121' : '#FFF',
        '& h2': {
            flex: '1',
            fontSize: '14px',
            fontWeight: '500',
            color: theme.palette.type === 'dark' ? '#FFF' : '#000',
        },
        '&:hover': {
            backgroundColor: theme.palette.type === 'dark' ? '#383838' : '#f9f9f9',
            cursor: 'pointer',
        }
    },
    sidebarrowIcon: {
        color: theme.palette.type === 'dark' ? '#909090' : '#606060',
        marginRight: '24px',
        fontSize: '24px',
    }
});

export default styles
