import {useQuery} from 'react-query'
import {client} from './api-client'

function useListItems(user) {
  const {data: listItems} = useQuery({
    queryKey: 'list-items',
    queryFn: () =>
      client('list-items', {token: user.token}).then(data => data.listItems),
  })

  return listItems ?? []
}

function useListItem(bookId, user) {
  const listItems = useListItems(user)
  return listItems.find(item => item.bookId === bookId) ?? null
}

export {useListItems, useListItem}
