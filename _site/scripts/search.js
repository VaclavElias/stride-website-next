---
# This is an empty front
---
{% include_relative _scripts/lunr.min.js %}

(function () {
    function displaySearchResults(results, store) {
        var searchResults = document.getElementById('search-results');

        if (results.length) {
            var appendString = '';
            for (var i = 0; i < results.length; i++) {
                var post = store[results[i].ref];
                appendString += `
<article class="card mb-4 p-4">
    <div class="row justify-content-center">
        <div class="col-12 post-card-header">
            <h3 class="entry-title"><a href="${post.url}">${post.title}</a></h3>
            ${getDate(post.date)}
            <p>${post.author}</p>
            <p>
                ${getExcerpt(post)}...
            </p>
        </div>
    </div>
</article>
`
            }
            searchResults.innerHTML = appendString;
        } else {
            searchResults.innerHTML = '<div class="card p-4"><h2>No results found</h2>Your query returned 0 results. Retry with a different search term, or try one of the links on the side.</div>';
        }
    }

    function getDate(date) {
        if (date.length === 0) return '';

        return `
            <p class="d-flex justify-content-between">
                <span>
                    <i class="fa-solid fa-calendar-days me-1"></i> ${date}
                </span>
            </p>
`
    }

    function getExcerpt(post) {
        return post.excerpt.length === 0 ? post.content.substring(0, 200) : post.excerpt;
    }

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');

        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');

            if (pair[0] === variable) {
                return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
            }
        }
    }

    var searchTerm = getQueryVariable('query');

    if (searchTerm) {
        document.getElementById('search-result-term').textContent = searchTerm;

        fetch('./search.json')
            .then(response => response.json())
            .then(data => search(data))
            .catch(error => console.log(error));
    }

    function search(data) {
        // Initalize lunr with the fields it will be searching on. I've given title
        // a boost of 10 to indicate matches on this field are more important.
        var idx = lunr(function () {
            this.field('id');
            this.field('title', { boost: 10 });
            this.field('author');
            this.field('category');
            this.field('tags');
            this.field('content');
            this.field('excerpt');

            for (var key in data) { // Add the data to lunr
                this.add({
                    'id': key,
                    'title': data[key].title,
                    'author': data[key].author,
                    'category': data[key].category,
                    'tags': data[key].tags,
                    'content': data[key].content,
                    'excerpt': data[key].excerpt
                });
            }

        });

        var results = idx.search(searchTerm); // Get lunr to perform a search
        displaySearchResults(results, data); // We'll write this in the next section
    }
})();