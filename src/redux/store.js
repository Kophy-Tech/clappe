import { configureStore } from "@reduxjs/toolkit"
import { user, theStore } from './reducers'

export const store = configureStore(
    {
        reducer: {
            user,
            store: theStore
            // students
            
        }
    }
)