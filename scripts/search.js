---
# This is an empty front
---
{% include_relative _scripts/lunr.min.js %}

(function () {
    function displaySearchResults(results, store) {
        var searchResults = document.getElementById('search-results');

        if (results.length) { // Are there any results?
            var appendString = '';
            //for (var i = 0; i < results.length; i++) {  // Iterate over the results
            //    var item = store[results[i].ref];
            //    appendString += '<li><a href="' + item.url + '"><h3>' + item.title + '</h3></a>';
            //    appendString += '<p>' + item.content.substring(0, 150) + '...</p></li>';
            //}
            for (var i = 0; i < results.length; i++) {  // Iterate over the results
                var post = store[results[i].ref];
                appendString += `
<article class="card mb-4 p-4">
    <div class="row justify-content-center">
        <div class="col-12 post-card-header">
            <h3 class="entry-title"><a href="${post.url}">${post.title}</a></h3>
            ${getDate(post.date)}
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
            searchResults.innerHTML = '<li>Your query returned 0 results. Retry with a different search term, or try one of the links on the side.</li>';
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

            for (var key in window.store) { // Add the data to lunr
                this.add({
                    'id': key,
                    'title': window.store[key].title,
                    'author': window.store[key].author,
                    'category': window.store[key].category,
                    'tags': window.store[key].tags,
                    'content': window.store[key].content,
                    'excerpt': window.store[key].excerpt
                });
            }

        });

        var results = idx.search(searchTerm); // Get lunr to perform a search
        displaySearchResults(results, window.store); // We'll write this in the next section
    }
})();