import {useQuery, useMutation, queryCache} from 'react-query'
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

const defaultMutationOptions = {
  onSettled: () => queryCache.invalidateQueries('list-items'),
}

function useUpdateListItem(user) {
  return useMutation(updates => {
    client(`list-items/${updates.id}`, {
      data: updates,
      token: user.token,
      method: 'PUT',
    })
  }, defaultMutationOptions)
}

function useRemoveListItem(user) {
  return useMutation(({id}) => {
    client(`list-items/${id}`, {
      token: user.token,
      method: 'DELETE',
    })
  }, defaultMutationOptions)
}

function useCreateListItem(user) {
  return useMutation(
    ({bookId}) => client('list-items', {data: {bookId}, token: user.token}),
    defaultMutationOptions,
  )
}

export {
  useListItems,
  useListItem,
  useCreateListItem,
  useUpdateListItem,
  useRemoveListItem,
}
