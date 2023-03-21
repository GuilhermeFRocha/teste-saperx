import { Routes, Route } from 'react-router-dom'
import { ContactList } from '../pages/ContactList'
import { DefaultLayout } from '../pages/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<ContactList />} />
      </Route>
    </Routes>
  )
}