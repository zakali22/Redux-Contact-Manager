import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT, GET_CONTACT } from './type';
import axios from 'axios';


export const getContacts = () => async dispatch => {
	const res = await axios.get('http://jsonplaceholder.typicode.com/users');
	console.log(res.data);
	dispatch({
		type: GET_CONTACTS,
		payload: res.data
	})
}

export const getContact = (id) => async dispatch => {
	const res = await axios.get(`http://jsonplaceholder.typicode.com/users/${id}`);
	console.log(res.data)
	dispatch({
		type: GET_CONTACT,
		payload: res.data
	})
}

export const addContact = (contact) => async dispatch => {
	const res = await axios.post('http://jsonplaceholder.typicode.com/users', contact);
	dispatch({
		type: ADD_CONTACT,
		payload: res.data
	})
}

export const deleteContact = (id) => async dispatch => {
	try {
		await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`)
		dispatch({
			type: DELETE_CONTACT,
			payload: id
		})
	} catch (e){
		dispatch({
			type: DELETE_CONTACT,
			payload: id
		})
	}
}

export const editContact = (id, contact) => async dispatch => {
	const res = await axios.put(`http://jsonplaceholder.typicode.com/users/${id}`, contact);
	dispatch({
		type: EDIT_CONTACT,
		payload: res.data
	})
} 
