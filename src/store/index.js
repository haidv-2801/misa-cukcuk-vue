import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const storeData = {
    state: {
        formEmployeeDetailState: {
            isOpen: false
        }
    }
}

const store = new Vuex.Store(storeData)

export default store
