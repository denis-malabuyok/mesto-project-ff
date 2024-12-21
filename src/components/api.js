const config = {
	baseUrl: 'https://nomoreparties.co/v1/cohort-mag-4',
	headers: {
		authorization: 'ecab0c64-56bc-4fb9-82be-80d751b834be',
		'Content-Type': 'application/json',
	},
}
const getResponse = res => {
	if (res.ok) {
		return res.json()
	}
	return Promise.reject(`Ошибка ${res.status}`)
}
export const getUserData = () => {
	return fetch(`${config.baseUrl}/users/me`, {
		headers: config.headers,
	}).then(getResponse)
}
export const getInitialsCards = () => {
	return fetch(`${config.baseUrl}/cards`, {
		headers: config.headers,
	}).then(getResponse)
}
export const addNewCard = (name, link) => {
	return fetch(`${config.baseUrl}/cards`, {
		method: 'POST',
		headers: config.headers,
		body: JSON.stringify({
			name,
			link,
		}),
	}).then(getResponse)
}
export const editUserData = (name, about) => {
	fetch(`${config.baseUrl}/users/me`, {
		method: 'PATCH',
		headers: config.headers,
		body: JSON.stringify({
			name,
			about,
		}),
	}).then(getResponse)
}
export const setLike = (cardId, isLiked) => {
	const method = isLiked ? 'DELETE' : 'PUT'
	return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
		method,
		headers: config.headers,
	}).then(getResponse)
}
export const deleteCardApi = cardId => {
	fetch(`${config.baseUrl}/cards/${cardId}`, {
		method: 'DELETE',
		headers: config.headers,
	}).then(getResponse)
}