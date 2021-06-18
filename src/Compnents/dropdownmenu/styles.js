const styles = (theme) => ({
   menuItem: {
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    transition: 'background 500ms',
    paddingLeft: '16px',
    paddingRight: '16px',
    color: theme.palette.type === 'dark' ? '#dadce1' : '#606060',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: theme.palette.type === 'dark' ? '#383838' : '#dddddd',
    }
    },
    iconButton: {
      height: 'calc(60px * .5)',
      borderRadius: '50%',
      margin: '2px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'filter 300ms',
      marginRight: '16px',
      '&:hover': {
        filter: 'brightness(1.2)',
      }
      
    },
    iconRight: {
      marginLeft: 'auto',
    },
    dropdown: {
      position: 'absolute',
      top: '54px',
      width: '298px',
      transform: 'translateX(-84%)',
      backgroundColor: theme.palette.type === 'dark' ? '#202020' : '#FFF',
      overflow: 'hidden',
    },
    menu: {
      width: '100%',
    },
    menuPrimaryEnter: {
      position: 'absolute',
      transform: 'translateX(-110%)',
    },
    menuPrimaryEnterActive: {
      transform: 'translateX(0%)',
      transition: 'all 500ms ease',
    },
    menuPrimaryExit: {
      position: 'absolute',
    },
    menuPrimaryExitActive: {
      transform: 'translateX(-110%)',
      transition: 'all 500ms ease',
    },
    menuSecondaryEnter: {
      transform: 'translateX(110%)',
    },
    menuSecondaryEnterActive: {
      transform: 'translateX(0%)',
      transition: 'all 500ms ease',
    },
    menuSecondaryExitActive: {
      transform: 'translateX(110%)',
      transition: 'all 500ms ease',
    }

        
  
  });
  
  export default styles;
