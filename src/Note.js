import React, { Component } from 'react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'
import FaFloppyO from 'react-icons/lib/fa/floppy-o'

class Note extends Component {
	constructor(props) {
		super(props)
    this.state = {
        editing: false

    }
		this.edit = this.edit.bind(this)
		this.remove = this.remove.bind(this)
    this.save= this.save.bind(this)
    this.renderForm = this.renderForm.bind(this)
    this.renderDisplay = this.renderDisplay.bind(this)
	}

  // Edit note function
  // Testing
	edit() {
	    this.setState({
        editing: true

      })
	}

  // Remove note function
	remove() {
		alert('removing note')
	}

  // Save note function
  save () {
    alert('saving note')
  }

  renderForm() {
    return(
       <div className="note">
       <form>
        <textarea/>
        <button onClick={this.save}><FaFloppyO/></button>
       </form>
       </div>
    )

  }

	renderDisplay() {
		return (
			<div className="note">
				<p>Learn React</p>
				<span>
					<button onClick={this.edit} id="edit"><FaPencil /></button>
					<button onClick={this.remove} id="remove"><FaTrash /></button>
				</span>
			</div>
		)
	}

  render(){
     if(this.state.editing){
       return this.renderForm()
     }
     else {
          return this.renderDisplay()
     }
  }
}

export default Note
