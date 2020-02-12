var sc=new screen("canvas"),
	sc2=new screen("canvas2"),
	sc_visible=true,
	cb1=new cube(50,50,20,sc),
	point=new fuguePoint(150,75),
	keys=new keysMapping();

sc.setup();
sc.clear();
sc.border("solid");
sc.size("80%","");
sc.updtPoint(point);
sc.updtCube(cb1);
sc.error("Hola","K<br>Hace");
sc2.setup();
sc2.clear();
sc2.border("solid");
sc2.size("80%","");
sc2.updtPoint(point);
sc2.updtCube(cb1);
sc2.error("Hola","K<br>Hace");
keys.setup();

setInterval(() => {
	if (keys.keyAscii != 0) {
		press(keys.keyChar);
	}
},1000/50);

function press(_e_){
	cb1.move(cb1.x[0]+2,cb1.y[0]+1,20);
	sc.clear();
	sc.updtCube(cb1);
	console.log(_e_);
}
function release(_e__){
	console.log("----------------------");
}

console.log(sc);