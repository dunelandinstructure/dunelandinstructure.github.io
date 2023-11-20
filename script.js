function searchList() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('hiddenList');
    li = ul.getElementsByTagName('li');
  
    // Clear previous search results
    document.getElementById('searchResults').innerHTML = '';
  
    // Search for matches and display results
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName('a')[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        let matchedItem = document.createElement('li');
        let link = document.createElement('a');
        link.href = a.href;
        link.textContent = txtValue;
        matchedItem.appendChild(link);
        document.getElementById('searchResults').appendChild(matchedItem);
      }
    }
  }
  