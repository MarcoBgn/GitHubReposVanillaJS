'use strict';

describe('Class: Layout', function () {
  //CSS/layout is not tested.
  var testData, testList;
  
  testData = '{"login":"Marfeel", "avatar_url": "public/images/glyphicons-50-star.png", "name": "Unit Test", "location": "Barcelona"}';
  testList = '[{"name":"repo1", "forks":"4", "stargazers_count":"10"},{"name":"repo2","forks":"42", "stargazers_count":"1"}]'
  
  describe('displayHeader()', function () {
    it('parses the data JSON and creates the HTML layout for the user', function () {
      Layout.displayHeader(testData);
      expect(document.getElementById('usr_img')).toBeDefined();
    });
  });
  
  describe('displayList()', function () {
    it('parses the data JSON and creates the HTML list of Repos ', function () {
      Layout.displayList(testList);
      expect(document.getElementById('list_title').innerHTML).toEqual("Repositories");
    });
  });
  
  describe('displayError()', function () {
    it('displays a notice if the username is not found', function () {
      Layout.displayError();
      expect(document.getElementById('data_container').className).toEqual('container_error');
      expect(document.getElementById('error_div').innerHTML).toEqual('Does not exist');
    })
  })
})