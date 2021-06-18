const styles = (theme) => ({
    likerow: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        paddingRight: '6px',
        '& h2': {
            flex: '1',
            fontSize: '14px',
            fontWeight: '500',
            color: theme.palette.type === 'dark' ? '#AAAAAA' : '#606060',

        }
    },
    likerowIcon: {
        color: theme.palette.type === 'dark' ? '#AAAAAA' : '#606060',
        fontSize: '24px',
        padding: '6px',
    }
});

export default styles