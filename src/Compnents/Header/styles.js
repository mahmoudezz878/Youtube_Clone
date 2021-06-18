const styles = (theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 16px",
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: theme.palette.type === "dark" ? "#212121" : "white",
    height: "56px",
  },
  headerLeft: {
    height: "32px",
    display: "flex",
    alignItems: "center",
    height: "32px",
    '& svg': {
      padding: '8px',
    }
  },
  headerRight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "32px",
  },
  headerLogo: {
    height: "55px",
    objectFit: "contain",
  },
  headerSearch: {
    height: "32px",
    display: "flex",
    alignItems: "center",
  },
  headerInput: {
    display: "flex",
    alignItems: "center",
    width: "640px",
    height: "32px",
    padding: '0 4px 0 4px',
    marginLeft: '40px',

    '& input': {
      flex: "1",
      border:
      theme.palette.type === "dark"
        ? "1px solid hsl(0deg 0% 20%)"
        : "1px solid lightgray",
      outline: "none",
      fontSize: "16px",
      lineHeight: "24px",
      marginLeft: "4px",
      fontFamily: "Roboto, Noto, sans-serif",
      fontWeight: "400",
      color: theme.palette.type === "dark" ? "#ffffffe0" : "#111111",
      backgroundColor: theme.palette.type === "dark" ? "#121212" : "white",
      padding: theme.palette.type === "dark" ? "4px 6px" : "2px 6px",
    }
  },
  headerMi: {
    padding: '8px',
    color: theme.palette.type === "dark" ? "white" : "#606060",
  },
  headerIcon: {
    padding: "8px",
    color: theme.palette.type === "dark" ? "white" : "#606060",
  },
  headerInputLink: {
    width: "70px !important",
    backgroundColor: theme.palette.type === "dark" ? "hsl(0deg 0% 20%)" : "#fafafa",
    color: "gray",
    height: "30px !important",
    textAlign: "center",
    margin: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: `1px solid ${theme.palette.type === 'dark' ? 'hsl(0 0% 19% / 1)' : 'lightgray'}`,
  },
  headerIcons: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.type === "dark" ? "white" : "#606060",
  },
  signin: {
    color: theme.palette.type === "dark" ? "#3EA6FF" : "#065fd4",
    border: `1px solid ${
      theme.palette.type === "dark" ? "#3EA6FF" : "#065fd4"
    }`,
    display: "flex",
    alignItems: "center",
    padding: "5px 11px",
  },
  signincolor: {
    color: theme.palette.type === "dark" ? "#3EA6FF" : "#065fd4",
    fontSize: "x-large",
  },
  signinp: {
    fontSize: "14px",
    fontWeight: "500",
    marginLeft: "8px",
  },
  headerRightUl: {
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none',
  padding: 0,
  margin: 0,
        '& li': {
          '&:hover': {
            backgroundColor: theme.palette.type === 'dark' ? '#383838' : '#f9f9f9',
            cursor: 'pointer',
            borderRadius:'50%'
        }
        }
}
});

export default styles;
