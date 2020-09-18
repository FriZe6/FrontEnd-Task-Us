
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Fade } from '@material-ui/core';

import { Boardbar } from '../cmps/Boardbar';
import { Navbar } from '../cmps/Navbar';
import { loadBoards } from '../store/actions/boardActions'
import { getUserById } from '../store/actions/userActions';

class _UserProfile extends Component {
    state = {
        isModalOpen: false
    }
    async componentDidMount() {
        this.props.loadBoards()
        this.props.getUserById(this.props.match.params.id)
    }
    toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }
    render() {
        if (!this.props.userProfile) return <h1>Loading...</h1>
        const { loggedUser, userProfile } = this.props
        const { email, fullName, username } = this.props.userProfile
        console.log('IOM HERE', this.props.userProfile)
        return (
            <section className="user-profile">
                <Navbar />
                <Boardbar />
                <div className="user-container">
                    <header className="header-container padding-x-15 padding-y-15 flex justify-center  align-center">
                        <img className="user-profile-big" src="https://via.placeholder.com/250" alt="" />
                    </header>

                    <div className="user-details-container padding-x-30 padding-y-30 align-center  flex column">
                        {loggedUser._id === userProfile._id ? <h2 onClick={this.toggleModal}
                            className="clickable-header">Edit Profile</h2> : ''}
                        <div className="user-details-inner-container">

                            <h3>Email: <span className="span-user-details">{email}</span></h3>
                            <h3>Full Name: <span className="span-user-details">{fullName}</span></h3>
                            <h3>Username: <span className="span-user-details">{username}</span> </h3>
                        </div>
                    </div>
                    {/* Modal */}
                    <Fade in={this.state.isModalOpen}>
                        <div className="modal-screen flex justify-center align-center">
                            <div className="modal-container padding-x-15 padding-y-15">

                                <div className="user-modal-col">
                                    <img className="user-profile-big" src="https://via.placeholder.com/250" alt="" />
                                </div>
                                <div className="user-modal-col">
                                    <form className="form-container flex justify-center column  align-center" action="">
                                        <input placeholder="Email" type="email" />
                                        <input placeholder="Username" type="text" />
                                        <input placeholder="Password" type="password" />
                                        <input placeholder="Full Name" type="text" />
                                        <button>Save Changes</button>
                                        <button className="secondary-btn" onClick={this.toggleModal}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Fade>


                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        modal: state.systemReducer.modal,
        userProfile: state.userReducer.userProfile,
        loggedUser: state.userReducer.loggedUser
    }
}

const mapDispatchToProps = {
    loadBoards,
    getUserById
}

export const UserProfile = connect(mapStateToProps, mapDispatchToProps)(_UserProfile);