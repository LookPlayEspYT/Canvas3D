var sc=new screen("canvas"),
	sc_visible=true,
	cb1=new cube(50,50,sc),
	point=new fuguePoint(150,75);

sc.border("solid");
sc.updtPoint(point);
sc.updtCube(cb1);

function toggle(){
	if (sc_visible) {
		sc.hidden();
	} else {
		sc.show();
	};
	sc_visible=!sc_visible;
}

console.log(sc);