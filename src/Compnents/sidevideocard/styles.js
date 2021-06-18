const styles = (theme) => ({
    sidevideocard: {
        width: '402px',
        height: '94px',
        cursor: 'pointer',
        display: 'flex',
        marginBottom: '8px', 
    },
    videocardThumnail: {
        height: '94px',
        width: '168px',
        marginRight: '8px',
    },
    videocardInfo: {
        width: '226px',
        height: '94px',
    },
    videocardText: {
        '& h4': {
            lineHeight: '16px',
            marginBottom: '4px',
            fontWeight: '500',
            fontSize: '14px',
            color: theme.palette.type === 'dark' ? '#FFF' : 'rgb(3, 3, 3)',

        },
        '& > p': {
            color: theme.palette.type === 'dark' ? '#AAAAAA' : 'rgb(96, 96, 96)',
            fontWeight: '400',
            fontSize: '13px',
            lineHeight: '18px',
            
        }
    }
})

export default styles
