import { connect } from 'react-redux'
import Admin from './component'
import { SelectAllComplaints } from '../../state/admin'

const mapStateToProps = state => {
    return { items: SelectAllComplaints(state) }
}

// const mapDispatchToProps = dispatch => {
//     return { addItem: (item) => dispatch(addItem(item)) }
// }

export default connect(mapStateToProps, null)(Admin)