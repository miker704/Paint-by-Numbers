
import React from 'react';
import LoginModal from './login_modal';
import {closeModal} from '../../actions/modal_actions'
import { connect } from 'react-redux';
import LoginContainer from '../sessions/login_container';
import SignUpContainer from '../sessions/signup_container';
import ManualContainer from './manual_container';
import Reveal from './reveal_puzzle'
import LibraryContainer from './library_container';
import SeedContainer from '../create_puzzle/create_puzzle_options/seed_container';

class Modal extends React.Component {
      constructor(props){
            super(props)
      }

      render(){
            let component;

            switch (this.props.modal) {
                  case 'login':
                        component=<LoginContainer/>
                        break
                  case 'manual':
                        component=<ManualContainer />
                        break
                  case 'library':
                        component=<LibraryContainer />
                        break
                  case 'puzzle-reveal':
                        break
                  case 'signup':
                        component = <SignUpContainer />
                        break;
                  case 'seed':
                        component = <SeedContainer swap={this.props.swap} />
                        break;
                  default:
                        return null
            }

            if (!this.props.modal) { return null }

            return(
                  <div>{component}</div>
            )
      }
}

const mapStateToProps = state => {
      return {
            modal: state.modal
      }
}

const mapDispatchToProps = dispatch => {
      return {
            closeModal: () => dispatch(closeModal())
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);