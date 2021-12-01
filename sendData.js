function sendData(data, url) {
    var params = {
        'method': 'POST',
        'muteHttpExceptions': true,
        headers: { 'Content-Type': 'application/json' },
        'payload': JSON.stringify(data)
    };

    var response = fetch(url, params);
    var bodyText = response.getContentText();
    var json = JSON.parse(bodyText);
    console.log(json);
}
