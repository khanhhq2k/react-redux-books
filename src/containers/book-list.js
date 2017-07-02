import React, { Component} from 'react';
import {connect} from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return(
        <li
          onClick={() => this.props.selectBook(book) }
          key={book.title}
          className='list-group-item'>
          {book.title}
        </li>
      );
    });
  }
  render(){
    return(
      <ul className='list-group col-md-4'>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  //whatever returned here will show up as props of this BookList container
  return { books: state.books }
}

//Anything returned from this function will end up as props for Booklist container
function mapDispatchtoProps (dispatch) {
  //Whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchtoProps)(BookList);
