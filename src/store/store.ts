import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import  userSlice  from './user/user'
import employesSlice from './employes/employesSlice'
import jobSlice from './job/jobSlice'
import projectsSlice from './projects/projectsSlice'
import collectionsSlice from './collections/collectionsSlice'
import productsSlice from './products/productsSlice'
import contactSlice from './contact/contactSlice'
import langSlice from './langSlice.ts/langSlice'
import careersSlice from './careers/careersSlice'
import blogsSlice from './blogs/blogsSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userSlice,
    employee:employesSlice,
    jobs:jobSlice,
    projects: projectsSlice,
    collection: collectionsSlice,
    products: productsSlice,
    contact: contactSlice,
    lang: langSlice,
    careers: careersSlice,
    blogs:blogsSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch