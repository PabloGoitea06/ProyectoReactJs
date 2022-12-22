const styles = {
    ul:{
        listStyle:'none',
        display:'flex',
        justifyContent:'space-between',
        textDecoration:'none',
        width:'600px'

    }
}


const ItemListContainer = (props) => {
    return(
        <ul style={styles.ul}>
            <li>{props.Item1}</li>
            <li>{props.Item2}</li>
            <li>{props.Item3}</li>
        </ul>
    )
}

export default ItemListContainer;