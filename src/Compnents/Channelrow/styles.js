const styles = (theme) => ({
  channelrow: {
    display: "flex",
    alignItems: "center",
    width: "70%",
  },

  channelrowText: {
    display: "flex",
    flexDirection: "column",
    '& h4': {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    "& p": {
      color: theme.palette.type === 'dark' ? '#AAAAAA' : "#606060",
      fontSize: "small !important",
    }
  },

  channelrowLogo: {
    height: "120px !important",
    width: "120px !important",
    margin: "10px 60px",
  },

});

export default styles;
