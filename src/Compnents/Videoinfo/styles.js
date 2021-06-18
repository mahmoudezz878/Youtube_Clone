const styles = (theme) => ({
    videoinfo: {
        width: '925px',
    },
    videoDetails: {
        paddingTop: '20px',
        paddingBottom: '8px',
        lineHeight: '30px',
        borderBottom: `1px solid ${theme.palette.type === 'dark' ? '#ffffff1a' : '#0000001a'}`,
    },
    videoinfoHeadline: {
        '& > h1':{
        fontWeight: '400',
        fontSize: 'large',
        color: theme.palette.type === 'dark' ? '#FFF' : '#030303'
        }
    },
    videoinfoStats: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& > p': {
            fontSize: 'medium',
            color: theme.palette.type === 'dark' ? '#AAAAAA' : '#606060',
        },
    },
    videoinfoChannel: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '12px',
        paddingTop: '16px',
        '& > div': {
            display: 'flex',
        alignItems: 'center',
        }
    },
    videoinfoLikes: {
        display: 'flex',
        alignItems: 'center',
    },
    videoinfoChannelinfo: {
        paddingLeft: '5px',
    },
    videoinfoChanneltitle: {
        fontSize: 'medium',
        margin: '2px',
        color: theme.palette.type === 'dark' ? '#FFF' : 'rgb(3, 3, 3)',
    },
    videoinfoChannelsubs: {
        color: 'gray',
        fontSize: 'small',
        margin: '0',
        color: theme.palette.type === 'dark' ? '#AAA' : '#606060',
    },
    videoinfoSubscribe: {

    },
    videoinfoSubscribebbut: {
        backgroundColor: 'rgb(204, 0, 0)',
        color: 'rgb(255, 255, 255)',
        fontSize: '14px',
        fontWeight: '500',
        letterSpacing: '0.007px',
        textTransform: 'uppercase',
        verticalAlign: 'middle',
        width: '109px',
        height: '35px',
        padding: '10px 16px',
        border: 'none',
        cursor: 'pointer',
    },
    videoinfoAvatar: {
        marginRight: '16px',

    },
    videoinfoChanneldesc: {
        paddingBottom: '16px',
        borderBottom: `1px solid ${theme.palette.type === 'dark' ? '#ffffff1a' : '#0000001a'}`,
        '& p': {
            wordBreak: 'break-word',
            whiteSpace: 'pre-wrap',
            color: theme.palette.type === 'dark' ? '#FFF' : 'rgb(3, 3, 3)',
            marginLeft: '64px',
            fontSize: '14px',
        }
    }
})

export default styles
