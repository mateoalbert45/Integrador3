package dao;

import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import esquemas.Carrera;
import esquemas.Estudiante;
import esquemas.EstudianteCarrera;
import esquemas.EstudianteCarreraPK;

public class DaoEstudianteCarrera {
	private EntityManagerFactory emf = null;

	public DaoEstudianteCarrera() {
		this.emf = Persistence.createEntityManagerFactory("Arqui");
	}
	//b) matricular un estudiante en una carrera
	public  void matricularEstudiante(Estudiante estu, Carrera carr) {
		EntityManager em = emf.createEntityManager();
		EstudianteCarreraPK ecpk = new EstudianteCarreraPK(estu.getDni(),carr.getId());
		//Generamos fechas aleatoreas
		EstudianteCarrera ec = new EstudianteCarrera(ecpk,estu,carr, new Date((long) (System.currentTimeMillis() - Math.random() * 1000000000)));
		em.persist(ec);
		em.close();
	}
	
	/*3)Generar un reporte de las carreras, que para cada carrera incluya información de los
	inscriptos y egresados por año. Se deben ordenar las carreras alfabéticamente, y presentar
	los años de manera cronológica.*/
	public List<EstudianteCarrera> reporteCarreras(){
		EntityManager em = emf.createEntityManager();
		try {
		@SuppressWarnings("unchecked")
		List <EstudianteCarrera> reporte = em.createQuery("Select ec from EstudianteCarrera ec  join ec.carrera c  where ec.fechaEgreso is not null order by c.nombre,ec.fechaEgreso").getResultList();
		em.close();
		return reporte;
		}
		catch(Exception e){
			em.close();
			return null;
		}
	}
}
