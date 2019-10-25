import React, {useState, useEffect} from 'react';
import firebase from './firebase';

export const AuthContext = React.createContext();

//retorna os dados do usuário logado / "null" quando não tem nenhum usuário logado
const useGetUser = () => {
    const [user, setUser] = useState(null);
    useEffect(()=> {
        firebase.auth().onAuthStateChanged(currentUser => {
            if(currentUser){
                setUser(currentUser)
            }else{
                setUser(null);
            }
        })
    },[])
    return user;
}

//Cria um usuário no firebase
const useCreateUser = () => {
    const [state, setState] = useState({
        error:'',
        success:''
    })

    const createUser = (email, passwd) => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(email,passwd)
        .then(user => {
            setState({
                ...state,
                success: 'OK'
            })
        })
        .catch(err => {
                setState({
                ...state,
                error: err.message
            }) 
        })
    }

    return [state, createUser];
}

//Loga um usuário do firebase
const useSignInUser = () => {
    const [state, setState] = useState({
        error:'',
        success:''
    })

    const signInUser = (email, passwd) => {
        firebase
        .auth()
        .signInWithEmailAndPassword(email,passwd)
        .catch(err => {
                setState({
                ...state,
                error: err.message
            }) 
        })
    }

    return [state, signInUser];
}

const signout = () =>{
    firebase
    .auth()
    .signOut()
    .then(() => {
        console.log('signOut');
    })
}

export const AuthProvider = ({children}) => {
    const user = useGetUser();
    const [createUserState, createUser] = useCreateUser();
    const [signInUserState, signInUser] = useSignInUser();

    return (
        <AuthContext.Provider value={{
            user,
            createUser: {
                createUserState, 
                createUser
            },
            signInUser: {
                signInUser,
                signInUserState
            },
            signout
            }} >
            {children}
        </AuthContext.Provider>
    )
}
