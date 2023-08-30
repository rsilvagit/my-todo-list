# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Exemplo If else ternário

condição ? if :else
condição && if
condição || else

//Service como função

//Service como função

const endpoit = 'http://localhost:3000/resource';
const headers = { "Content-type": 'application/json' }
const getUrl = (resource) => {
    return BASE_URL.replace('resouce', resource)
}

const Get = async (resource) => {
    return await fetch(getUrl(resource));
}

const Show = async (resource, id) => {
    return await fetch(getUrl(`${resource}/${id}`));
}


const Create = async (resource, data) => {
    return await fetch(getUrl(resource), {
        method: 'POST',
        body: data,
        headers,

    })
}
const Update = async (resource, id, data) => {
    return await fetch(getUrl(`${resource}/${id}`)), {
        method: 'POST',
        body: data,
        headers,

    }
}
const Delete = async (resource, id) => { 
    return await fetch(getUrl(`${resource}/${id}`),{
        method: 'DELETE',
    });
}

export const ApiService = {
    Get,
    Show,
    Create,
    Update,
    Delete
}