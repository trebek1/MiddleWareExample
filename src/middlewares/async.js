// format for a middleware 
// dispatch
// next ==> send to next middleware, if none ==> go to reducers 
// action 
// export default function({ dispatch }) {
// 	return next => action => {
// 		console.log(action);
// 		next(action);
// 	}
// }

export default function({ dispatch }) {
	return next => action => {
		// a promise would have .then
		if(!action.payload || !action.payload.then){
			console.log("the payload ", action.payload);
			return next(action);
		}

		// here there must be a promise 
		action.payload.then(response => dispatch({...action, payload: response}));

		console.log('we have a promise ', action);
	}
}