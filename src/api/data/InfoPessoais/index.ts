import api from "../../index";
import {IInfoPessoais} from "../../../interfaces/InfoPessoais.interface"

class InfoPessoaisData {
  index() {
    return api.get<IInfoPessoais[]>('infopessoais');
  }
}

export default new InfoPessoaisData();