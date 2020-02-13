var sc=new screen("canvas"),
	sc_visible=true,
	cb1=new cube(50,50,20,sc),
	point=new fuguePoint(150,75);

sc.setup();
sc.clear();
sc.border("solid");
sc.size("80%","");
sc.updtPoint(point);
sc.updtCube(cb1);
sc.error("Hola","K<br>Hace");

setInterval(() => {
	keyUpdt();
	if (kkey.a==100) {
		cb1.move(cb1.x[0]+2,cb1.y[0],20);
	}
	if (kkey.a==97) {
		cb1.move(cb1.x[0]-2,cb1.y[0],20);
	}
	if (kkey.a==115) {
		cb1.move(cb1.x[0],cb1.y[0]+2,20);
	}
	if (kkey.a==119) {
		cb1.move(cb1.x[0],cb1.y[0]-2,20);
	}

	sc.clear();
	sc.updtCube(cb1);
},1000/50);

console.log(sc);