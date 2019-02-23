import { connect } from 'react-redux'
import Admin from './component'
// import { SelectAllItems } from '../../state/itemList'
// import { addItem } from '../../state/itemList'

// const mapStateToProps = state => {
//     return { items: SelectAllItems(state) }
// }

// const mapDispatchToProps = dispatch => {
//     return { addItem: (item) => dispatch(addItem(item)) }
// }

export default connect(null, null)(Admin)