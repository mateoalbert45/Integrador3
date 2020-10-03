package restControllers;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import esquemas.Estudiante;
import restControllers.Lector;

@Path("/estudiantes")
public class RestEstudiante {
	
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/add")
	@Produces(MediaType.APPLICATION_JSON)
	public String altaDeEstudiante(Estudiante e){
	//	Estudiante e1 = new Estudiante(8,"pabloideeeeeeeeeeeeeeeee","Miguelsssssssss",25,"m","Tandil",321);
		Lector.estudiante.insertEstudiante(e);
	    return "El usuario fue guardado con exito";
	}
}
