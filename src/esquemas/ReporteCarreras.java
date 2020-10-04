package esquemas;

import java.util.List;

public class ReporteCarreras {
	
	private int idCarrera;
	
	private List<Estudiante> graduados;
	
	private List<Estudiante> inscriptos;

	public List<Estudiante> getGraduados() {
		return graduados;
	}

	public void setGraduados(List<Estudiante> graduados) {
		this.graduados = graduados;
	}

	public int getIdCarrera() {
		return idCarrera;
	}

	public List<Estudiante> getInscriptos() {
		return inscriptos;
	}
	
	public void setGraduado(Estudiante e) {
		graduados.add(e);
		
	}
	public void setInscriptos(Estudiante e) {
		inscriptos.add(e);
		
	}
	
}
