import { useMutation } from '@vue/apollo-composable';

import {
  ADDCLIENTBYUSER,
  AddClientByUserData
} from 'src/api/clients/addClientByUser';
import { MutationAddClientByUserArgs, ClientInput } from 'src/api/types';
import { reactive } from '@vue/composition-api';
import { notifyThere, notifyThis, context } from '../context';
import { logErrorMessages } from '@vue/apollo-util';

export const useAddClientByUser = (): [ClientInput, () => void] => {
  const state: ClientInput = reactive({
    clientName: '',
    domicile: '',
    contact: ''
  });

  const { mutate: senAddClient, onDone, onError } = useMutation<
    AddClientByUserData,
    MutationAddClientByUserArgs
  >(ADDCLIENTBYUSER, { context: context() });

  onDone(({ data, errors }) => {
    if (errors) notifyThere(errors);

    state.clientName = null;
    state.domicile = '';
    state.contact = '';

    notifyThis(
      'Client client ' +
        data.addClientByUser.clientName +
        ' a bien été enregisté.',
      'positive'
    );
  });

  onError(error => {
    console.log('errorrrrrrr');
    logErrorMessages(error);
  });

  const submit = () => {
    console.log({ state });

    if (state.clientName !== '') senAddClient({ input: state });
  };

  return [state, submit];
};