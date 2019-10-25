import {useState, useEffect} from 'react';
import firebase from './firebase';

// Salvar dados no firebase
export const useDatabasePush = endpoint => {
    const [status, setStatus] = useState('');

    const save = data => {
        //Conecta com o banco de dados "test"
        const ref = firebase.database().ref(endpoint);

        //Salva no banco de dados
        ref.push(data, err => {
            if(err){
                setStatus('ERROR');
            }else{
                setStatus('SUCCESS');
            }
        })
    }

    return [status, save];
}

//Pegar dados no firebase
export const useDatabase = endpoint => {
    const [data, setData] = useState({});

    useEffect(() => {
        //Conecta com o banco de dados "test"
        const ref = firebase.database().ref(endpoint);
        ref.on('value', snapshot => {
            //Armazena o retorno dentro de "data"
            setData(snapshot.val());
        });
        return () => {
            ref.off()
        }
    }, [endpoint]);

    return data;
}