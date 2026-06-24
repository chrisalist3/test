fetch('./page/sample.txt')
  .then(response => {
    if (!response.ok) {
      throw new Error();
    }
    return response.text();
  })
  .then(textData => {
    secs = textData.split('\n');
    console.log(secs);
    document.querySelector('main').innerHTML = secs[0];
    document.getElementById('foot').innerHTML = secs[1] || '';
  })
  .catch(error => {
    document.querySelector('main').innerHTML = '<h2>Error 404</h2><p>This content was not found :(</p>';
  });
