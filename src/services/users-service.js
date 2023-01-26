async function getData( userID, typeData) {
    let _apiBase = 'https://jsonplaceholder.typicode.com/';
    const options = { 
        method: 'GET',
    };
    const res = await fetch(`${_apiBase}users${userID && `/${userID}` || ''}${typeData && `/${typeData}` || ''}`, options);
    return await res.json();
};

export default getData;