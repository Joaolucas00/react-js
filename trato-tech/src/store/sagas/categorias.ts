import { takeEvery } from "redux-saga/effects"
import { adicionarCategorias } from "../reducers/categorias"
import { createStandaloneToast } from "@chakra-ui/toast";


const { toast } = createStandaloneToast();

function* workerCategorias() {
    yield console.log('Observando... ')
    
    toast({
        title: 'Carregando',
        description: 'Carregando categorias',
        status: 'loading',
        duration: 2000,
        isClosable: true
      });
    toast({
        title: 'Sucesso!',
        description: 'Categorias carregadas com sucesso',
        status: 'success',
        duration: 2000,
        isClosable: true
      });
      toast({
        title: 'Erro',
        description: 'Erro na busca',
        status: 'error',
        duration: 2000,
        isClosable: true
    });
      
}

export function* watcherCategorias() {
    yield takeEvery(adicionarCategorias, workerCategorias)
}