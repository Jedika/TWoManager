import { useQuery, useResult } from '@vue/apollo-composable';
import { reactive, watch } from 'vue';

import { CLIENTSUSER, UserClientData } from './useClients.gql';
import { QueryClientsArgs } from '../types';
import { notifyThere } from '../context';
import { logErrorMessages } from '@vue/apollo-util';

export const clientsVariable = reactive<QueryClientsArgs>({
  filter: {},
  pagination: {
    limit: 30,
    page: 1
  }
});

export const useClients= () => {

  const state = reactive({
    pagination: {
      page: 1,
      itemCount: 0,
      rowsPerPage: 30,
      totalItems: 0,
      totalPages: 0
    }
  });

  const {
    loading: loadingClient,
    onResult,
    onError,
    refetch,
    result,
  } = useQuery<UserClientData, QueryClientsArgs>(CLIENTSUSER, clientsVariable, {
    fetchPolicy: 'cache-and-network',
  });

  onResult(({ data, errors }) => {
    if (errors) notifyThere(errors);

    console.log({data})

    if (data) {
      state.pagination.rowsPerPage =
        data.clients.paginationMeta.itemsPerPage;
      state.pagination.itemCount = data.clients.paginationMeta.totalItems;
      state.pagination.page = data.clients.paginationMeta.currentPage;
      state.pagination.totalPages = data.clients.paginationMeta.totalPages;
    }
  });

  onError(error => {
    logErrorMessages(error);
  });

  const clients = useResult(result, [], data => data.clients.clients)

  function fetchMoreclient(page: number, limit = 30) {
    clientsVariable.pagination.page = page;
    clientsVariable.pagination.limit = limit;
    refetch(clientsVariable);
  }

  return {
    state,
    clients,
    clientsVariable,
    fetchMoreclient,
    loadingClient
  };
};
