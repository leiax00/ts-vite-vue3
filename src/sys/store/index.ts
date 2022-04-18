import { createStore, } from "vueX";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import {batchParseJsFile} from "../../utils";

const modules = batchParseJsFile(import.meta.globEager('./modules/*.js'))

const store = createStore({
    state,
    mutations,
    actions,
    modules
})
export default store
