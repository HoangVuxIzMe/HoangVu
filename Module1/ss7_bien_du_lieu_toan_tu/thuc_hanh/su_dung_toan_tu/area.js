var inputWidth;
var inputHeight;

inputWidth = prompt('Nhập chiều rộng: ')
inputHeight = prompt('Nhập chiều dài: ')

var width = parseInt(inputWidth)
document.write('Enter width: ' + '<br/>' + width + '<br/>')
var height = parseInt(inputHeight)
document.write('Enter height: ' + '<br/>' + height + '<br/>')

var area = width * height;
document.write('The area is: ' + '<br/>' + area)