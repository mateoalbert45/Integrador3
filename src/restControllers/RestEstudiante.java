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
import restControllers.Lector;

@Path("/estudiante")
public class RestEstudiante {
	
	
//	@POST
//	@Consumes(MediaType.APPLICATION_JSON)
//	@Path("/add")
//	@Produces(MediaType.APPLICATION_JSON)
//	public String altaDeEstudiante(Estudiante e){
//	//	Estudiante e1 = new Estudiante(8,"pabloideeeeeeeeeeeeeeeee","Miguelsssssssss",25,"m","Tandil",321);
//		Lector.estudiante.insertEstudiante(e);
//	    return "El usuario fue guardado con exito";
//	}
	
	
	@GET
	@Path("/recuperarEstudiantes")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Estudiante> recuperarEstudiantes(){
	    return Lector.estudiante.recuperarEstudiantes();
	}
	
	@GET
	@Path("/estudianteSegunLibreUniversitaria/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Estudiante estudianteSegunLibreUniversitaria(@PathParam("id") int num){
	    return Lector.estudiante.estudianteSegunLibreUniversitaria(num);
	}
	
	
	@GET
	@Path("/estudianteSegunGenero/{genero}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Estudiante> estudianteSegunGenero(@PathParam("genero") String genero){
	    return Lector.estudiante.estudianteSegunGenero(genero);
	}
	
}
