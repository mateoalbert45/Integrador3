package restControllers;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import esquemas.Carrera;
import esquemas.Estudiante;

@Path ("/carrera")
public class RestCarrera {

//	
//	@POST
//	@Consumes(MediaType.APPLICATION_JSON)
//	@Produces(MediaType.APPLICATION_JSON)
//	public String altaDeEstudiante(Carrera c){
//	//	Estudiante e1 = new Estudiante(8,"pabloideeeeeeeeeeeeeeeee","Miguelsssssssss",25,"m","Tandil",321);
//		Lector.carrera.insertCarrera(c);;
//	    return "La carrera fue guardada con exito";
//	}
	
	@GET
	@Path("/carrerasSegunInscriptos")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Carrera> carrerasSegunInscriptos(){
	    return Lector.carrera.carrerasSegunInscriptos();
	}
	
	
	
	
}
