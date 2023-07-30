function loadData(key) {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
}

function removeData(key) {
    const data = localStorage.removeItem(key)
    return JSON.parse(data);
}

function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export { loadData, removeData, saveData }