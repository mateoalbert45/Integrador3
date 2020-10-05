package restControllers;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import esquemas.Carrera;
import esquemas.Estudiante;
import esquemas.EstudianteCarreraPK;

//@Path("/matricular")
public class RestEstudianteCarrera {


	/* El metodo "matricular" tiene un error desde la entrega numero 2, en donde al intentar matricular un alumno a su carrera este falla si no se hace
	 * en la misma sesion, es decir, que si no ejecutamos los insert de los estudiantes, de las carreras y los matriculamos todo en la mimsma sesion, ocasiona un fallo de
	 * clave duplicada
	 */
	
//	@POST
//	@Consumes(MediaType.APPLICATION_JSON)
//	@Produces(MediaType.APPLICATION_JSON)
//	public String matricular(EstudianteCarreraPK ec){
//		Lector.estudianteCarrera.matricularEstudiante(ec.getId_Estudiante(), ec.getId_Carrera());
//	    return "El usuario fue guardado con exito";
//	}
	
}
