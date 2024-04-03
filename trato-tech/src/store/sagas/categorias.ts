import { call, delay, put, takeLatest } from "redux-saga/effects";
import { adicionarCategorias, carregarCategorias } from "../reducers/categorias";
import { createStandaloneToast } from "@chakra-ui/toast";
import categoriasServices from "../../services/categorias";
import { ICategorias } from "../../interfaces/ICategorias";


const { toast } = createStandaloneToast();

function* workerCategorias(): Generator<any, void, ICategorias[]> {
    toast({
        title: 'Carregando',
        description: 'Carregando categorias',
        status: 'loading',
        duration: 2000,
        isClosable: true
      });
    try {
        yield delay(1000);
        const categorias = yield call(categoriasServices.get); // serve pra chamar um worker também
        toast({
          title: 'Sucesso!',
          description: 'Categorias carregadas com sucesso',
          status: 'success',
          duration: 2000,
          isClosable: true
        });
        yield put(adicionarCategorias(categorias))
    } catch(erro) {
        toast({
          title: 'Erro',
          description: 'Erro na busca',
          status: 'error',
          duration: 2000,
          isClosable: true
      });
    }
}

export function* watcherCategorias(): Generator {
    const tarefa: any = yield takeLatest(carregarCategorias, workerCategorias);
    yield takeLatest(adicionarCategorias, () => tarefa.cancel());
}