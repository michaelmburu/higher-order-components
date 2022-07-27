import React, { useState, useEffect} from 'react';
import axios from 'axios';

// Access userData with functions to modify
export const withEditableUser = (Component, userId) => {
    return props => {
        const [originalUser, setOriginalUser] = useState(null);
        const [user, setUser] = useState(null);

        useEffect(() => {
            (async () =>{
                const response = await axios.get(`/users/${userId}`);
                setOriginalUser(response.data);
                setUser(response.data)
            })();
        }, []);

        // Make changes to state
        const onChangeUser = changes => {
            setUser({...user, ...changes})
        }

        //Save changes to server
        const onSaveUser = async() => {
            const response = await axios.post(`/users/${userId}`, {user});
            setOriginalUser(response.data);
            setUser(response.data)
        }

        const onResetUser = () => {
            setUser(originalUser);
        }

        //Reset state of user to state of our original user. When user wants to reset the form
        return <Component 
            {...props} 
            user={user} 
            onChangeUser={onChangeUser} 
            onSaveUser={onSaveUser}
            onResetUser={onResetUser}
        />


    }
}

