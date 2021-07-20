const initialState = [
  {
    "id": 1,
    "description": "Dominoes",
    "category": "FoodNDining",
    "amount": 430,
    "status":"Paid",
    "date": "2020-01-02"
    },
    {
    "id": 2,
    "description": "Car wash",
    "category": "utility",
    "amount": 500,
    "status":"Unpaid",
    "date": "2020-01-06"
    },
    {
    "id": 3,
    "description": "Amazon",
    "category": "shopping",
    "amount": 2030,
    "status":"Paid",
    "date": "2020-01-07"
    },
    {
    "id": 4,
    "description": "House rent",
    "category": "Food & Dining",
    "status":"Paid",
    "amount": 35900,
    "date": "2020-01-03"
    },
    {
    "id": 5,
    "description": "Tuition",
    "category": "education",
    "amount": 2200,
    "status":"Unpaid",
    "date": "2020-01-12"
    },
    {
    "id": 6,
    "description": "Laundry",
    "category": "Personal Care",
    "amount": 320,
    "status":"Paid",
    "date": "2020-01-14"
    },
    {
    "id": 7,
    "description": "Vacation",
    "category": "Travel",
    "amount": 3430,
    "status":"Unpaid",
    "date": "2020-01-18"
    }
  ];

  const billReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_BILL":
        state = [...state, action.payload];
        return state;
      case "UPDATE_BILL":
          const updateState= state.map((bill)=>bill.id===action.payload.id? action.payload:bill);
          state=updateState;
          return state;
      case "DELETE_BILL":
        const filterBills=state.filter(bill=>bill.id!==action.payload? bill:null);
        state=filterBills;
        return state;
      default:
          return state;
    }
};

export default billReducer;