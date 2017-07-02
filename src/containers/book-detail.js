import React, { Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render(){
    if(!this.props.book) {
      return <div>Select a book first</div>
    }
    return(
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <h5>Pages: {this.props.book.pages}</h5>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}
export default connect(mapStateToProps)(BookDetail);
