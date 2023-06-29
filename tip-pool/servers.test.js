describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add server if input is empty', function(){
    submitServerInfo();

    expect(serverName = "").toBeFalsy();
  });

  it('should generate a delete td and append to tr when a newTr is created', function(){
    let newTr = document.createElement('tr');
    appendDeleteBtn(newTr);

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerText).toEqual('X');

  });

  afterEach(function() {
    serverId = 0;
    allServers = {};
    serverTbody.innerHTML = '';
  });
});
