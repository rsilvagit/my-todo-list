//Service como função

const endpoit = 'http://localhost:3000/resource';

const Get = async (resource,) => {
    return await fetch(BASE_URL.replase('resource', resource))
}


const Show = async (resource ,id) => {}
const Create = async (resource, data) => {}
const Update = async (resource, id, data) => {}
const Delete = async (resource, id) => {}

export const ApiService = {
    Get,
    Show,
    Create,
    Update,
    Delete
}