package dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import esquemas.Carrera;

public class DaoCarrera {
	private EntityManagerFactory emf = null;

	public DaoCarrera() {
		this.emf = Persistence.createEntityManagerFactory("Arqui");

	}
	//dar de alta carrera
	public void insertCarrera(Carrera carr) {
		EntityManager em = emf.createEntityManager();
		em.getTransaction().begin();
		em.persist(carr);
		em.getTransaction().commit();
	}
	
	//f)recuperar las carreras con estudiantes inscriptos, y ordenar por cantidad de inscriptos
	public List<Carrera> carrerasSegunInscriptos(){
		EntityManager em = emf.createEntityManager();
		em.getTransaction().begin();
		try {
		@SuppressWarnings("unchecked")
		List <Carrera> carreras = em.createQuery("Select ec.carrera from Estudiante_Carrera ec group by ID_Carrera having count(ID_Carrera) > 0 order by count(ID_Estudiante) DESC").getResultList();
		return carreras;
		}
		catch(Exception e){
			return null;
		}
	}
	
	
	
	
	
	
}
