import React, { useEffect, useState } from 'react'
import ProfileSearchForm from './ProfileSearchForm'

const BASE_URL = "https://api.github.com/users"

function ProfileViewerWithSearch() {
    const [ username,setUsername ] = useState("Nawabi-Hamza")
    const [ profile,setProfile ] = useState({ data:null, isLoadding:true, isEmpty:false })

    useEffect(function fetchGithubUsernameImg(){
        async function fetchUser(){
            const response = await fetch(`${BASE_URL}/${username}`);
            const jsonResponse = await response.json();
            if(jsonResponse.message) return setProfile({ data:null,isLoadding:false,isEmpty:true })
            setProfile({ data:jsonResponse,isLoadding:false,isEmpty:false })
        }
        fetchUser()
    },[username])

    function searchValue(input){
        setProfile({ data:null,isLoadding:true })
        setUsername(input)
    }
  return (
    <div>
        <ProfileSearchForm search={searchValue} />
        {profile.isLoadding && <h2>Loadding....</h2>}
        {profile.isEmpty && <h2>User does not Exist try another username !</h2>}
        {profile.data && 
            <div className='Profile'>
                <h2>{profile?.data?.login}</h2>    
                <img src={profile?.data?.avatar_url} alt="" />
                <a href={profile?.data?.html_url} target='_blank'><button>See Profile</button></a>
            </div>
        }
    </div>
  )
}

export default ProfileViewerWithSearch