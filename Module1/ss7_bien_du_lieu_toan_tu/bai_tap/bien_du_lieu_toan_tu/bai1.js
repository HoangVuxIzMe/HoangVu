var inputPhysic;
var inputChemistry;
var inputBiological;

inputPhysic = prompt('Nhập điểm vật lý : ')
inputChemistry = prompt('Nhập điểm hóa học: ')
inputBiological = prompt('Nhập điểm sinh học: ')

var physic = parseInt(inputPhysic)
document.write('Điểm vật lý: ' + '<br/>' + physic + '<br/>')
var chemistry = parseInt(inputChemistry)
document.write('Điểm vật lý: ' + '<br/>' + chemistry + '<br/>')
var biological = parseInt(inputBiological)
document.write('Điểm vật lý: ' + '<br/>' + biological + '<br/>')

var tong = physic + chemistry + biological ;
document.write('Tổng điểm: ' + '<br/>' + tong + '<br/>')
var diemtrungbinh = tong / 3;
document.write('Điểm trung bình: ' + '<br/>' + diemtrungbinh)
