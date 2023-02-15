const initialState =  {
    empData:[
        {
            empName: "salman",
            emoCode: 1234,
            empContact: 9877564614
        },
        
        {
            empName: "sharukh",
            emoCode: 5834,
            empContact: 97775114614
        },

    ],
};
export const Sample2 = (state,initialState, action)=> {
    if(action.type === "FIRST_ACTION") {
 return{
    ...state,
    empData: [action.data, ...state.empData]
 };
    }else {
        return state;
    }

};