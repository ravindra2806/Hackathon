import { connect } from 'react-redux'
import ChatComponent from './ChatComponent'
import { fetchData } from '../../state/ChatComponent';
// import { addItem } from '../../state/itemList'


// const mapStateToProps = state => {
//     return { items: SelectAllItems(state) }
// }

const mapDispatchToProps = dispatch => {
    return { fetchChatData : (item) => dispatch(fetchData(item)) }
}

export default connect(null, mapDispatchToProps)(ChatComponent)
