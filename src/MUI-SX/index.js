

const mainPageBodyStyle = {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"}

const horizontalLine = {
    width: "100%", 
    height: "1px", 
    backgroundColor:"#00000030"
}

const contentBoxStyle = {
    width: "85%", 
    marginTop: "30px", 
    display: "flex", 
    flexDirection: "column", 
    gap: "10px"
}

const contentStyle = {
    width: "100%", 
    height: "80px", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "space-between", 
    paddingLeft: "15px", 
    paddingRight: "15px"
}

const flexColumn = {
    display: "flex", 
    flexDirection: "column"
}
const titleContent = {
    fontSize: "20px", 
    fontStyle: "bold", 
    marginBottom: "5px",
    textDecoration: "underline",
    color: "#2E9AB4",
    '&:hover': {
        cursor: "pointer",
        color: '#0F445D'
    }
}

const flexEnd = {
    display: 'flex',
    justifyContent: 'flex-end'
}

const signInButtonStyle = { 
    marginTop: "15px",
    marginBottom:"15px",
    backgroundColor: '#0F445D',
    '&:hover': {
        cursor: "pointer",
        backgroundColor: '#2E99B3'
    } }

export {
    mainPageBodyStyle,
    horizontalLine,
    contentBoxStyle,
    contentStyle,
    flexColumn,
    titleContent,
    flexEnd,
    signInButtonStyle
}