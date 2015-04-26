// spec.js
describe('Globophone Demo App', function() {
  it('should have a title', function() {
    browser.get('https://www.googledrive.com/host/0B0PVE1JTVFgOcXcxQ055T3pfS3M/');
    
    expect(browser.getTitle()).toEqual('Welcome to Globophone!');
  });
});

