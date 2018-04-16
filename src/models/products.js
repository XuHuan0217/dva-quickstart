export default {
    namespace: 'products',
    state: [],
    reducters:{
        'delete'(state, {payload: id}){
            return state.filter(item => item.id !== id);
        },
    },
};