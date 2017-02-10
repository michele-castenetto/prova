
(function() {

    var _$app = $('#app');

    var template = '<h1> {{title}} </h1>';
    var html = template.replace(new RegExp('{{title}}', 'g'), "APP");
    _$app.html(html);

    _$app.append('<div class="list"><div>');

    toAppend = "";

    ["uno", "due", "tre"].forEach(function(item) {
        toAppend += '<div>'+ item +'</div>';   
    });

    _$app.find('.list').append(toAppend);

})();

