
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
            // renderList();
            const res = await response.json();
            document.querySelector('#results').value = JSON.stringify(res);
        }
    }
});

document.querySelector('#new').addEventListener('click', (e) => {
    document.querySelector('#query').value = "";
    document.querySelector('#query-name').value = "";
});