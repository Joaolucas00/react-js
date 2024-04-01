import { createStandaloneToast } from "@chakra-ui/toast";
import { ForkedTaskAPI } from "@reduxjs/toolkit";


const { toast } = createStandaloneToast();


interface IparametrosTarefa {
    fork: any,
    get: (arg?: any) => Promise<any>,
    action: any,
    dispatch: any
    textoCarregando: string,
    textoSucesso: string,
    textoErro: string,
}

const criarTarefa = async ({ fork, action, get, dispatch, textoCarregando, textoErro, textoSucesso}: IparametrosTarefa) => {
    toast({
        title: 'Carregando',
        description: textoCarregando,
        status: 'loading',
        duration: 2000,
        isClosable: true
      });

      const tarefa = fork(async (api: ForkedTaskAPI) => {
        await api.delay(1000)
        return await get();
    })

    const response = await tarefa.result;

    if (response.status === 'ok') {
        dispatch(action(response.value));
        toast({
            title: 'Sucesso!',
            description: textoSucesso,
            status: 'success',
            duration: 2000,
            isClosable: true
          });
    }

    if (response.status === 'rejected') {
        toast({title: 'Erro',
        description: textoErro,
        status: 'error',
        duration: 2000,
        isClosable: true
        });
    }
}

export default criarTarefa