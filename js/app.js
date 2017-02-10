(function() {

    var _$app = $('#app');

    var template = '<h1> {{title}} </h1>';
    var html = template.replace(new RegExp('{{title}}', 'g'), "APP");
    _$app.html(html);
    

})();

