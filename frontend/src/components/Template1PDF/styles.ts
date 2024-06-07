import { StyleSheet } from "@react-pdf/renderer"
export const styles = StyleSheet.create({
    container:{
        padding: 30,
        color:"#595858"
    },
    p:{
        marginVertical:5
    },
    flex:{
        display:"flex",
        flexDirection:"row",
    },
    secondaryTitle: {
        marginBottom:5
    },
    header:{
        marginBottom:15,
    },
    aside:{
        width:"23%"
    },
    main:{
        width:"75%",
        // borderLeftWidth:1,
    },
    section:{
        position:"relative",
        borderLeft: "1px solid gainsboro",
        paddingHorizontal: 15,
        // marginBottom:10
    },
    bullet:{
        width:10,
        height:10,
        backgroundColor: "white",
        left:-20.5,
        top: 16,
        border:"2px solid gray",
        borderRadius:50
    },
    list:{
      marginHorizontal:20
    },
    link:{
        color:"black"
    },
    listPadding:{
        marginVertical:4
    },
    h1:{
        textTransform:"uppercase",
        fontSize: 22,
        marginBottom:5,
        color:"black"
    },
    h2:{
        textTransform:"uppercase",
        fontFamily: 'ab',
        fontWeight:"heavy",
        fontSize: 11,
        marginVertical:5,
        color:"black"
    },
    h3:{
        fontFamily: 'ab',
        fontSize: 10,
        marginVertical:5,
        color:"black"
    },
    h4:{
        textTransform:"uppercase",
        fontFamily: 'ab',
        fontSize: 9,
        marginVertical:5,
        color:"black"
    },
    smallText:{
        fontSize:10,
        lineHeight:1.5,
    },
    page:{
        fontSize:13,
        display: "flex",
        flexDirection: "row",
    }
})