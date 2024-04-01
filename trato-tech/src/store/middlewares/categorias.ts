import { createListenerMiddleware } from "@reduxjs/toolkit";
import { adicionarCategorias, carregarCategorias } from "../reducers/categorias";
import categoriasServices from "../../services/categorias";
import { createStandaloneToast } from "@chakra-ui/toast";

const { toast } = createStandaloneToast()

export const listener = createListenerMiddleware();

listener.startListening({
    actionCreator: carregarCategorias,
    effect: async (action, { dispatch, fork, unsubscribe }) => {

        toast({
            title: 'Carregando',
            description: 'Carregando categorias',
            status: 'loading',
            duration: 2000,
            isClosable: true
          });


        const tarefa = fork(async api => {
            await api.delay(1000)
            return await categoriasServices.get();
        })

        const response = await tarefa.result;

        if (response.status === 'ok') {
            dispatch(adicionarCategorias(response.value));
            toast({
                title: 'Sucesso!',
                description: 'Categorias carregadas com sucesso!',
                status: 'success',
                duration: 2000,
                isClosable: true
              });
              unsubscribe()
        }

        if (response.status === 'rejected') {
            toast({title: 'Erro',
            description: 'Erro na busca de categorias',
            status: 'error',
            duration: 2000,
            isClosable: true
            });
        }
    }
})
