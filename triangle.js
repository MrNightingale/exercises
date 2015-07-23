function drawTriangle(lines, tab, symbol) {
  var cntTabsFunction, cntSymbolsFunction;
  for (var k = 1; k <= lines; k++) {
    cntTabsFunction = lines - k;
    cntSymbolsFunction = k*2 - 1;
    console.log(drawLine(cntTabsFunction, cntSymbolsFunction, tab, symbol));
  }
  function drawLine(cntTabs, cntSymbols, tab, symbol) {
    var tabs = "";
    for (var i = 0; i < cntTabs; i++) {
      tabs += tab;
    }
    var symbols = "";
    for (var j = 0; j < cntSymbols; j++) {
      symbols += symbol;
    }
    return tabs + symbols;
  }
}
drawTriangle(4, " ", "*");