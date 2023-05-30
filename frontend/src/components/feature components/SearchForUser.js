import React, { useState, useEffect} from "react";
//import { SrOnly } from "components/styles/GlobalStyles";
import styled from "styled-components/macro";
//import { BsSearch } from 'react-icons/bs';
import { API_URL } from "utils/utils";
import { Link } from "react-router-dom";

const SearchForUser = ( ) => {
    const [users, setUsers] = useState([])
    const [searchedUsers, setSearchedUsers] = useState([])
    
    const accessToken = localStorage.getItem('accessToken')

    // get-request to get all usernames
    useEffect (() => {
        const options = {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            "Authorization": accessToken
            }
        }
            fetch(API_URL("users"), options)
            .then(res => res.json())
            .then(data => {
            if(data.success) {
            setUsers(data.response)
            }
            })
            .catch((error => {
            console.error('Error:', error)
            }))
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
    }
// function to filter all users which names includes the searched word
    const handleSearchChange = (event) => {
        const filteredUsers = users.filter(user => user.username.toLowerCase().includes(event.target.value.toLowerCase()))
        if(event.target.value === '') {
            setSearchedUsers('')
        }
        else {
            setSearchedUsers(filteredUsers)
        }
    }
    const handleClick = () => {
        handleSearchChange('')
    }

    return (
        <>
            <SearchForUserForm onSubmit={handleSubmit}>
                <label><SrOnly>Search for user</SrOnly>
                    <input
                        type="text"
                        placeholder="Search for user..."
                        onChange={handleSearchChange}/>
                    <button>
                        <BsSearch />
                    </button>
                </label>
            </SearchForUserForm>
            {searchedUsers.length !== 0 && (
            <SearchResultsDiv>
            {searchedUsers.map(singleUser =>
                <Link to={`/users/${singleUser._id}`}  onClick={handleClick}>{singleUser.username}</Link>)}
            </SearchResultsDiv>)}
        </>
    )
}


export default SearchForUser

const SearchForUserForm = styled.form`

`

const SearchResultsDiv = styled.div`
    
`