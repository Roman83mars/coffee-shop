const coffee = {
    state: {
        coffee: [
            {
                id: 0,
                name: "Solimo Coffee Beans 2kg",
                country: "Brazil",
                price: 10.73,
                image: "good-1.jpg",
            },
            {
                id: 1,
                name: "Presto Coffee Beans 1kg",
                country: "Brazil",
                price: 15.99,
                image: "good-1.jpg",
            },
            {
                id: 2,
                name: "AROMISTICO Coffee 1kg",
                country: "Brazil",
                price: 6.99,
                image: "good-1.jpg",
            },
            {
                id: 3,
                name: "Solimo Coffee Beans 2kg",
                country: "Brazil",
                price: 10.73,
                image: "good-1.jpg",
            },
            {
                id: 4,
                name: "Solimo Coffee Beans 2kg",
                country: "Brazil",
                price: 10.73,
                image: "good-1.jpg",
            },
            {
                id: 5,
                name: "Solimo Coffee Beans 2kg",
                country: "Brazil",
                price: 10.73,
                image: "good-1.jpg",
            },
        ],
    },
    mutations: {
        setCoffeeData(state, data) {
            state.coffee = data
        }
    },
    actions: {
        setCoffeeData({ commit }, data) {
            commit('setCoffeeData', data);
        }
    },
    getters: {
        getCoffee(state) {
            return state.coffee
        },
        getCoffeeById(state) {
            return (id) => {
                return state.coffee.find((card) => card.id === +id)
            }
        }
    }
}
export default coffee