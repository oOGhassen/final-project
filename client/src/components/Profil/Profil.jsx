import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProfil } from '../../redux/actions/actionUser';

const Profil = () => {

    const { user, loading } = useSelector(state => state.userReducer);
    console.log(user);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProfil())
    }, [dispatch])

    return (
        <div>
            {
                loading ? <h1>Loading ...</h1> : <div>{user && <h1>{user.fullName}</h1>}</div>
            }
        </div>
    )
}

export default Profil