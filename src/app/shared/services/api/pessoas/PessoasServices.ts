import { Enviroments } from "../../../environments"
import { Api } from "../axios-config"

interface IListagemPessoa{
    id: number,
    nomeCompleto: string,
    email: string,
    cidadeId: string
}

interface IDetalhePessoa{
    id: number,
    nomeCompleto: string,
    email: string,
    cidadeId: string
}

type TPessoasComTotalCount = {
    data: IListagemPessoa[],
    totalCount: number
}


const getAll = async(page = 1, nome: ''): Promise<TPessoasComTotalCount | Error> =>{
    try{
        const urlRelativa = `/pessoas?_page=${page}&_per_page=${Enviroments.LIMITE_DE_LINHAS}&nome_like=${nome}`

        const { data, headers } = await Api.get(urlRelativa)

        if(data){
            return{
                data,
                totalCount: Number(headers['x-total-count'] || Enviroments.LIMITE_DE_LINHAS)
            }
        }

        return new Error("Erro ao listar os registros!")
    }   
    catch (error){
        console.error(error)
        return new Error((error as { message: string }).message || 'Erro ao buscar os itens')
    }
}
const getById = async(id=1): Promise<IDetalhePessoa | Error> =>{
    try{

        const { data } = await Api.get(`/pessoas/${id}`)

        if(data)
            return data

        return new Error("Nenhum dado foi encontrado")
    }
    catch (error){
        console.error(error)
        return new Error((error as {mensage: string}).mensage || "Erro ao buscar os dados")
    }
}

const create = async(dados: Omit<IDetalhePessoa, 'id'>): Promise<number | Error> =>{
    try{
        const { data } = await Api.post<IDetalhePessoa>(`/pessoas`,dados)

        if(data)
            return data.id

        return new Error("Erro ao criar registro")
    }
    catch (error){
        console.error(error)
        return new Error((error as {message: string}).message || "Erro ao salvo os dados")
    }
}
const updateById = async(id: number,dados: IDetalhePessoa): Promise<void | Error> =>{
    try{
        await Api.put(`/pessoas/${id}`, dados)
    }
    catch (error){
        return new Error((error as {mensage: string}).mensage || "Erro ao atualizar os dados")
    }
}
const deleteById = async(id: number): Promise<void | Error> =>{
    try{
        await Api.delete(`/pessoas/${id}`)
    }
    catch (error){
        return new Error((error as {mensage: string}).mensage || "Erro ao apaga registro")
    }
}


export const PessoasServices = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
}