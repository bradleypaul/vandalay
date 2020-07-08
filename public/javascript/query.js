document.querySelector('#save-query').addEventListener('click', async (e) => {
    const query = document.querySelector('#query').value;
    const name = document.querySelector('#query-name').value;

    if (query && name) {
        const response = await fetch('/api/query', {
            method: "POST",
            body: JSON.stringify({ query, name }),
            headers: {
                "Content-Type": "application/json"
            },
        });

        if (response.ok) {

            const res = await response.json();
            document.querySelector('#results').value = JSON.stringify(res);

            const list = document.querySelector("#query-list");
            appendListItem(list, name, query );
        }
    }
});

function appendListItem(name, list) {
    const node = document.createElement('option')
    node.append(name);
    node.setAttribute('data-name', name);
    node.setAttribute('data-query', query);
    list.append(node);
}

async function renderList() {
    const response = await fetch('/api/query');
    if (response.ok) {
        const queries = await response.json();
        const list = document.querySelector("#query-list");
        const queryNodes = queries.forEach(query => {
            appendListItem(query.name, list)
        });
    }
}

document.querySelector('#new').addEventListener('click', (e) => {
    document.querySelector('#query').value = "";
    document.querySelector('#query-name').value = "";
});

document.addEventListener("DOMContentLoaded", renderList);