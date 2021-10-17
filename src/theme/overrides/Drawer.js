// ----------------------------------------------------------------------

export default function Drawer() {
  return {
    MuiDrawer:{
      styleOverrides: {
        root: {
          "& .MuiPaper-root":{
            // Some CSS
            backgroundColor:"#033715",
            color:"white"
          }
        },
      }
    }
  };
}
