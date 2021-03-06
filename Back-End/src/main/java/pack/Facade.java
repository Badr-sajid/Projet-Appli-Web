package pack;

import java.util.Collection;

import javax.ejb.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

/**
 * Session Bean implementation class Facade
 */
@Singleton
@Path("/")
public class Facade {

	@PersistenceContext
	private EntityManager em;

	/////////////////////////////////////////////////////////////////////////  

	// Traitement des Questions
	// Ajouter une Question à la base de donnee
	@POST
	@Path("/AddQuestion")
	@Consumes({ "application/json" })
	public void AddQuestion(Question q) {
		em.persist(q);
		q.setEstTraite("false");
	}
	
	@GET
	@Path("/QuestionCitoyenById/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public Collection<Question> QuestionCitoyenById(@PathParam("id") String id) {
		return em.createQuery("FROM Question WHERE citoyen = "+id, Question.class).getResultList();

	}

	// recuperer la liste des Questions
	@GET
	@Path("/GetQuestion")
	@Produces({ "application/json" })
	public Collection<Question> GetQuestion() {
		return em.createQuery("from Question", Question.class).getResultList();
	}

	// Update la liste des Questions
	@PUT
	@Path("/UpdateQuestion/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public void UpdateQuestion(@PathParam("id") int QuestionId, Question nq) {
		Question q = em.find(Question.class, QuestionId);
		if (q == null)
			throw new RuntimeException("Question introuvable");
		q.setQuestion(nq.getQuestion());
		q.setReponse(nq.getReponse());
		q.setEstTraite(nq.getEstTraite());
		em.merge(q);
	}

	// Supprimer une Question
	@DELETE
	@Path("/DeleteQuestion/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public void DeleteQuestion(@PathParam("id") int QuestionId) {
		Question q = em.find(Question.class, QuestionId);
		if (q == null)
			throw new RuntimeException("Question introuvable");
		em.remove(q);
	}

	// recuperer une Question à partir de son Id
	@GET
	@Path("/GetQuestionById/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public Question GetQuestionById(@PathParam("id") int QuestionId) {
		Question q = em.find(Question.class, QuestionId);
		if (q == null)
			throw new RuntimeException("Question introuvable");
		return q;
	}

	/////////////////////////////////////////////////////////////////////////  

	// Traitement des Contact
	// Ajouter une Contact à la base de donnee
	@POST
	@Path("/AddContact")
	@Consumes({ "application/json" })
	public void AddContact(Contact q) {
		em.persist(q);
	}

	// recuperer la liste des Contacts
	@GET
	@Path("/GetContact")
	@Produces({ "application/json" })
	public Collection<Contact> GetContact() {
		return em.createQuery("from Contact", Contact.class).getResultList();
	}

	// Update la liste des Contacts
	@PUT
	@Path("/UpdateContact/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public void UpdateContact(@PathParam("id") int ContactId, Contact nc) {
		Contact c = em.find(Contact.class, ContactId);
		if (c == null)
			throw new RuntimeException("Contact introuvable");
		c.setAdresse(nc.getAdresse());
		c.setMail(nc.getMail());
		c.setNum(nc.getNum());
		em.merge(c);
	}

	// Supprimer une Contact
	@DELETE
	@Path("/DeleteContact/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public void DeleteContact(@PathParam("id") int ContactId) {
		Contact c = em.find(Contact.class, ContactId);
		if (c == null)
			throw new RuntimeException("Contact introuvable");
		em.remove(c);
	}

	// recuperer une Contact à partir de son Id
	@GET
	@Path("/GetContactById/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public Contact GetContactById(@PathParam("id") int ContactId) {
		Contact c = em.find(Contact.class, ContactId);
		if (c == null)
			throw new RuntimeException("Contact introuvable");
		return c;
	}

	/////////////////////////////////////////////////////////////////////////  

	// Traitement des Plaintes
	// Ajouter une Plainte à la base de donnee
	@POST
	@Path("/AddPlainte")
	@Consumes({ "application/json" })
	public void AddPlainte(Plainte p) {
		em.persist(p);
	}

	// recuperer la liste des Plaintes
	@GET
	@Path("/GetPlainte")
	@Produces({ "application/json" })
	public Collection<Plainte> GetPlainte() {
		return em.createQuery("from Plainte", Plainte.class).getResultList();
	}

	// Update une Plainte
	@PUT
	@Path("/UpdatePlainte/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public void UpdatePlainte(@PathParam("id") int PlainteId, Plainte np) {
		Plainte p = em.find(Plainte.class, PlainteId);
		if (p == null)
			throw new RuntimeException("Plainte introuvable");
		p.setCitoyen(np.getCitoyen());
		p.setDescription(np.getDescription());
		p.setEtat(np.getDescription());
		p.setObjet(np.getObjet());
		em.merge(p);
	}

	// Supprimer une Plainte
	@DELETE
	@Path("/DeletePlainte/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public void DeletePlainte(@PathParam("id") int PlainteId) {
		Plainte p = em.find(Plainte.class, PlainteId);
		if (p == null)
			throw new RuntimeException("Plainte introuvable");
		em.remove(p);
	}

	// recuperer une Plainte à partir de son Id
	@GET
	@Path("/GetPlainteById/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public Plainte GetPlainteById(@PathParam("id") int PlainteId) {
		Plainte p = em.find(Plainte.class, PlainteId);
		if (p == null)
			throw new RuntimeException("Plainte introuvable");
		return p;
	}

	
	/////////////////////////////////////////////////////////////////////////  

	// Traitement des Logins
	// Ajouter un Login à la base de donnee
	@POST
	@Path("/AddLogin")
	@Consumes({ "application/json" })
	public void AddLogin(Login l) {
		em.persist(l);
	}

	// recuperer la liste des Logins
	@GET
	@Path("/GetLogin")
	@Produces({ "application/json" })
	public Collection<Login> GetLogin() {
		return em.createQuery("from Login", Login.class).getResultList();
	}

	// Update un Login
	@PUT
	@Path("/UpdateLogin/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public void UpdateLogin(@PathParam("id") int LoginId, Login nl) {
		Login l = em.find(Login.class, LoginId);
		if (l == null)
			throw new RuntimeException("Login introuvable");
		l.setEmail(nl.getEmail());
		l.setIdLogin(nl.getIdLogin());
		l.setMdp(nl.getMdp());
		l.setType(nl.getType());
		em.merge(l);
	}

	// Supprimer un Login
	@DELETE
	@Path("/DeleteLogin/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public void DeleteLogin(@PathParam("id") int LoginId) {
		Login l = em.find(Login.class, LoginId);
		if (l == null)
			throw new RuntimeException("Numero introuvable");
		em.remove(l);
	}

	// recuperer un Login à partir de son Id
	@GET
	@Path("/GetLoginById/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public Login GetLoginById(@PathParam("id") int LoginId) {
		Login l = em.find(Login.class, LoginId);
		if (l == null)
			throw new RuntimeException("Numero introuvable");
		return l;
	}

	/////////////////////////////////////////////////////////////////////////  

	//Traitement des Fonctionnaires
	//Ajouter un Fonctionnaire à la base de donnee
	@POST
	@Path("/AddFonctionnaire")
	@Consumes({ "application/json" })
	public void AddFonctionnaire(Fonctionnaire f) {
		em.persist(f);
	}

	//recuperer la liste des Fonctionnaires
	@GET
	@Path("/GetFonctionnaire")
	@Produces({ "application/json" })
	public Collection<Fonctionnaire> GetFonctionnaire() {
		return em.createQuery("from Fonctionnaire", Fonctionnaire.class).getResultList();
	}

	//Update un Fonctionnaire
	@PUT
	@Path("/UpdateFonctionnaire/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public void UpdateFonctionnaire(@PathParam("id") int FonctionnaireId, Fonctionnaire nf) {
		Fonctionnaire f = em.find(Fonctionnaire.class, FonctionnaireId);
		if (f == null)
			throw new RuntimeException("Fonctionnaire introuvable");
		f.setCitoyen(nf.getCitoyen());
		f.setDateDebut(nf.getDateDebut());
		f.setSalaire(nf.getSalaire());
		f.setType(nf.getType());
		em.merge(f);
	}

	//Supprimer un Fonctionnaire
	@DELETE
	@Path("/DeleteFonctionnaire/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public void DeleteFonctionnaire(@PathParam("id") int FonctionnaireId) {
		Fonctionnaire f = em.find(Fonctionnaire.class, FonctionnaireId);
		if (f == null)
			throw new RuntimeException("Fonctionnaire introuvable");
		em.remove(f);
	}

	//recuperer un Fonctionnaire à partir de son Id
	@GET
	@Path("/GetFonctionnaireById/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public Fonctionnaire GetFonctionnaireById(@PathParam("id") int FonctionnaireId) {
		Fonctionnaire f = em.find(Fonctionnaire.class, FonctionnaireId);
		if (f == null)
			throw new RuntimeException("Fonctionnaire introuvable");
		return f;
	}


	/////////////////////////////////////////////////////////////////////////  

	//Traitement des Citoyens
	//Ajouter un Citoyen à la base de donnee
	@POST
	@Path("/AddCitoyen")
	@Consumes({ "application/json" })
	public void AddCitoyen(Citoyen c) {
		//System.out.println(c.getNum().getProprietaireNum()==null);
		em.persist(c);
		//c.getNum().setProprietaireNum(c);

	}

	//recuperer la liste des Citoyens
	@GET
	@Path("/GetCitoyen")
	@Produces({ "application/json" })
	public Collection<Citoyen> GetCitoyen() {
		return em.createQuery("from Citoyen", Citoyen.class).getResultList();
	}

	//Update un Citoyen
	@PUT
	@Path("/UpdateCitoyen/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public void UpdateCitoyen(@PathParam("id") int CitoyenId, Citoyen nc) {
		Citoyen c = em.find(Citoyen.class, CitoyenId);
		if (c == null) throw new RuntimeException("Citoyen introuvable");
		c.setCivilite(nc.getCivilite());
		c.setDateDeNaissance(nc.getDateDeNaissance());
		c.setLieuDeNaissance(nc.getLieuDeNaissance());
		c.setNationalite(nc.getNationalite());
		c.setNom(nc.getNom());
		c.setContact(nc.getContact());
		c.setPrenom(nc.getPrenom());
		c.setRemarques(nc.getRemarques());
		c.setStatut(nc.getStatut());
		//c.setEstFonctionnaire(nc.getEstFonctionnaire());
		em.merge(c);
	}

	//Supprimer un Citoyen
	@DELETE
	@Path("/DeleteCitoyen/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public void DeleteCitoyen(@PathParam("id") int CitoyenId) {
		Citoyen c = em.find(Citoyen.class, CitoyenId);
		if (c == null) throw new RuntimeException("Citoyen introuvable");
		em.remove(c);
	}

	//recuperer un Citoyen à partir de son Id
	@GET
	@Path("/GetCitoyenById/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public Citoyen GetCitoyenById(@PathParam("id") int CitoyenId) {
		Citoyen c = em.find(Citoyen.class, CitoyenId);
		if (c == null) throw new RuntimeException("Citoyen introuvable");
		return c;
	}

	
	// Traitement des Actualite
	// Ajouter une Actualite à la base de donnee
	@POST
	@Path("/AddActualite")
	@Consumes({ "application/json" })
	public Actualite AddActualite(Actualite a) {
		em.persist(a);
		em.flush();
		return a;
	}

	// recuperer la liste des Actualite
	@GET
	@Path("/GetActualite")
	@Produces({ "application/json" })
	public Collection<Actualite> GetActualite() {
		return em.createQuery("from Actualite", Actualite.class).getResultList();
	}


	// Supprimer une Actualite
	@DELETE
	@Path("/DeleteActualite/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public void DeleteActualite(@PathParam("id") int ActualiteId) {
		Actualite a = em.find(Actualite.class, ActualiteId);
		if (a == null)
			throw new RuntimeException("Actualite introuvable");
		em.remove(a);
	}

// recuperer une Actualite à partir de son Id
@GET
@Path("/GetActualiteById/{id}")
@Consumes({ "application/json" })
@Produces({ "application/json" })
public Actualite GetByIdActualite(@PathParam("id") int ActualiteId) {
	Actualite a = em.find(Actualite.class, ActualiteId);
	if (a == null)
		throw new RuntimeException("Actualite introuvable");
	return a;
}

@PUT
@Path("AddImageActualite/{id}/{url}")
public void AddImageActualite(@PathParam("id") int id, @PathParam("url")String url) {
	Actualite a = em.find(Actualite.class, id);
	UrlDocument u = new UrlDocument();
	u.setUrl(url);
	em.persist(u);
	a.setUrlImage(u);
	em.merge(a);
}



	/////////////////////////////////////////////////////////////////////////  

	//Traitement des Demandes
	//Ajouter un Demande à la base de donnee
	@POST
	@Path("/AddDemande")
	@Consumes({ "application/json" })
	public void AddDemande(Demande d) {
		em.persist(d);
		d.setEstTraite("false");
	}

	//recuperer la liste des Demandes
	@GET
	@Path("/GetDemande")
	@Produces({ "application/json" })
	public Collection<Demande> GetDemande() {
		return em.createQuery("from Demande", Demande.class).getResultList();
	}

	//Update un Demande
	@PUT
	@Path("/UpdateDemande/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public void UpdateDemande(@PathParam("id") int DemandeId, Demande nd) {
		Demande d = em.find(Demande.class, DemandeId);
		if (d == null) throw new RuntimeException("Demande introuvable");
		d.setCitoyen(nd.getCitoyen());
		d.setTypeDemande(nd.getTypeDemande());
		em.merge(d);
	}
	
	//Update un Demande
    @PUT
    @Path("/UpdateDemandeById/{id}/{etat}")
    public void UpdateDemandeById(@PathParam("id") int DemandeId, @PathParam("etat") String etat) {
        Demande d = em.find(Demande.class, DemandeId);
        if (d == null) throw new RuntimeException("Demande introuvable");
        d.setEstTraite(etat);
        em.merge(d);
    }
    
    
	//Supprimer un Demande
	@DELETE
	@Path("/DeleteDemande/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public void DeleteDemande(@PathParam("id") int DemandeId) {
		Demande d = em.find(Demande.class, DemandeId);
		if (d == null) throw new RuntimeException("Demande introuvable");
		em.remove(d);
	}

	//recuperer un Demande à partir de son Id
	@GET
	@Path("/GetDemandeById/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public Demande GetDemandeById(@PathParam("id") int DemandeId) {
		Demande d = em.find(Demande.class, DemandeId);
		if (d == null) throw new RuntimeException("Demande introuvable");
		return d;
	}
	/////////////////////////////////////////////////////////////////////////  

	// Traitement des Offres
	// Ajouter une offre à la base de donnee
	@POST
	@Path("/AddOffre")
	@Consumes({ "application/json" })
	public void AddOffre(Offre o) {
		em.persist(o);
	}

	// recuperer la liste des offres
	@GET
	@Path("/GetOffre")
	@Produces({ "application/json" })
	public Collection<Offre> GetOffre() {
		return em.createQuery("from Offre", Offre.class).getResultList();
	}

	// Update la liste des offres
	@PUT
	@Path("/UpdateOffre/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public void UpdateOffre(@PathParam("id") int offreId, Offre no) {
		Offre o = em.find(Offre.class, offreId);
		if (o == null)
			throw new RuntimeException("Offre introuvable");
		o.setTitre(no.getTitre());
		o.setDescription(no.getDescription());
		o.setNomEntreprise(no.getNomEntreprise());
		o.setTypeDePoste(no.getTypeDePoste());
		o.setDuree(no.getDuree());
		o.setRemuneration(no.getRemuneration());
		o.setDateDebut(no.getDateDebut());
		o.setPostePourvu(no.getPostePourvu());
		em.merge(o);
	}

	// Supprimer une offre
	@DELETE
	@Path("/DeleteOffre/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public void DeleteOffre(@PathParam("id") int offreId) {
		Offre o = em.find(Offre.class, offreId);
		if (o == null)
			throw new RuntimeException("Offre introuvable");
		for (Candidature c : o.getCandidature()) {
			this.DeleteCandidature(c.getId());
		}
		em.remove(o);
	}

	// recuperer une offre à partir de son Id
	@GET
	@Path("/GetOffreById/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public Offre GetByIdOffre(@PathParam("id") int offreId) {
		Offre o = em.find(Offre.class, offreId);
		if (o == null)
			throw new RuntimeException("Offre introuvable");
		return o;
	}

	// Supprimer tous les offres pourvues
	@DELETE
	@Path("/DeleteOffresPourvues/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public void DeleteOffresPourvues() {
		Collection<Offre> os = em.createQuery("from Offre", Offre.class).getResultList();
		for (Offre o : os) {
			if (o.getPostePourvu() == "true")
				this.DeleteOffre(o.getId());
		}
	}

	/////////////////////////////////////////////////////////////////////////  

	// Traitement des Candidature
	// Ajouter une Candidature à la base de donnee
	@POST
	@Path("/AddCandidature")
	@Consumes({ "application/json" })
	public void AddCandidature(Candidature c) {
		em.persist(c);
		
	}

	// recuperer la liste des Candidatures
	@GET
	@Path("/GetCandidature")
	@Produces({ "application/json" })
	public Collection<Candidature> GetCandidature() {
		return em.createQuery("from Candidature", Candidature.class).getResultList();
	}

	// Update la liste des Candidature
	@PUT
	@Path("/UpdateCandidature/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public void UpdateCandidature(@PathParam("id") int candidatureId, String etat) {
		Candidature c = em.find(Candidature.class, candidatureId);
		if (c == null)
			throw new RuntimeException("Candidature introuvable");
		c.setEtat(etat);
		em.merge(c);
	}

	// Supprimer une Candidature
	@DELETE
	@Path("/DeleteCandidature/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public void DeleteCandidature(@PathParam("id") int candidatureId) {
		Candidature c = em.find(Candidature.class, candidatureId);
		if (c == null)
			throw new RuntimeException("Candidature introuvable");
		em.remove(c);
	}

	// recuperer une Candidature à partir de son Id
	@GET
	@Path("/GetCandidatureById/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public Candidature GetByIdCandidature(@PathParam("id") int candidatureId) {
		Candidature c = em.find(Candidature.class, candidatureId);
		if (c == null)
			throw new RuntimeException("Candidature introuvable");
		return c;
	}



	@GET
	@Path("/MailExistant/{e}")
	@Consumes({ "application/json" })
	public Boolean MailExistant(@PathParam("e") String e) {
		return em.createQuery("FROM Login WHERE email = '"+e+"'", Login.class).getResultList().size()!=0;

	}

	@GET
	@Path("/DemandeCitoyenById/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public Collection<Demande> DemandeCitoyenById(@PathParam("id") String id) {
		return em.createQuery("FROM Demande WHERE citoyen = "+id, Demande.class).getResultList();

	}

	// Retourner Id citoyen.
	@GET
	@Path("/GetCitoyenId/{nom}/{prenom}/{date}/{lieu}/{nationalite}")
	@Consumes({"application/json"})
	@Produces({"application/json"})
	public Collection<Citoyen> GetCitoyenId(@PathParam("nom") String nom,@PathParam("prenom") String prenom,@PathParam("date") String date,@PathParam("lieu") String lieu,@PathParam("nationalite") String nationalite) {
		return em.createQuery(
				"select citoyen from Citoyen citoyen where citoyen.nom='"+nom+"' and citoyen.prenom ='"+prenom+"' and citoyen.dateDeNaissance='"+date+"' and citoyen.lieuDeNaissance='"+lieu+"' and citoyen.nationalite='"+nationalite+"'",Citoyen.class)
				.setMaxResults(1)
				.getResultList();
	}


	// Retourner Id citoyen.
	@GET
	@Path("/GetLoginId/{mail}")
	@Consumes({"application/json"})
	@Produces({"application/json"})
	public Collection<Login> GetLoginId(@PathParam("mail") String mail) {
		return em.createQuery(
				"select login from Login login where login.email='"+mail+"'", Login.class)
				.setMaxResults(1)
				.getResultList();
	}


	// Verification.
	@GET
	@Path("/verification/{e}/{m}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public Boolean verification(@PathParam("e") String e, @PathParam("m") String m) {
		return em.createQuery("select login from Login login where login.email = '"+e+"' and login.mdp = '"+m+"'", Login.class).getResultList().size()!=0;
	}


	/////////////////////////////////////////////////////////////////////////  

	// Traitement des DemandeCarteSejour
	// Ajouter une DemandeCarteSejour à la base de donnee
	@POST
	@Path("/AddDemandeCarteSejour")
	@Consumes({ "application/json" })
	public void AddDemandeCarteSejour(DemandeCarteSejour d) {
		em.persist(d);
	}

	// recuperer la liste des DemandeCarteSejour
	@GET
	@Path("/GetDemandeCarteSejour")
	@Produces({ "application/json" })
	public Collection<DemandeCarteSejour> GetDemandeCarteSejour() {
		return em.createQuery("from DemandeCarteSejour", DemandeCarteSejour.class).getResultList();
	}


	// Supprimer une DemandeCarteSejour
	@DELETE
	@Path("/DeleteDemandeCarteSejour/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public void DeleteDemandeCarteSejour(@PathParam("id") int DemandeCarteSejourId) {
		DemandeCarteSejour d = em.find(DemandeCarteSejour.class, DemandeCarteSejourId);
		if (d == null)
			throw new RuntimeException("Demande CarteSejour introuvable");
		em.remove(d);
	}

	// recuperer une DemandeCarteSejour à partir de son Id
	@GET
	@Path("/GetDemandeCarteSejourById/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public DemandeCarteSejour GetByIdDemandeCarteSejour(@PathParam("id") int DemandeCarteSejourId) {
		DemandeCarteSejour d = em.find(DemandeCarteSejour.class, DemandeCarteSejourId);
		if (d == null)
			throw new RuntimeException("Demande CarteSejour introuvable");
		return d;
	}

	/////////////////////////////////////////////////////////////////////////  

	// Traitement des DemandePasseport
	// Ajouter une DemandePasseport à la base de donnee
	@POST
	@Path("/AddDemandePasseportjour")
	@Consumes({ "application/json" })
	public void AddDemandePasseport(DemandePasseport d) {
		em.persist(d);
	}

	// recuperer la liste des DemandePasseport
	@GET
	@Path("/GetDemandePasseport")
	@Produces({ "application/json" })
	public Collection<DemandePasseport> GetDemandePasseport() {
		return em.createQuery("from DemandePasseport", DemandePasseport.class).getResultList();
	}


	// Supprimer une DemandePasseport
	@DELETE
	@Path("/DeleteDemandePasseport/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public void DeleteDemandePasseport(@PathParam("id") int DemandePasseportId) {
		DemandePasseport d = em.find(DemandePasseport.class, DemandePasseportId);
		if (d == null)
			throw new RuntimeException("Demande Passeport introuvable");
		em.remove(d);
	}

	// recuperer une DemandePasseport à partir de son Id
	@GET
	@Path("/GetDemandePasseportById/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public DemandePasseport GetByIdDemandePasseport(@PathParam("id") int DemandePasseportId) {
		DemandePasseport d = em.find(DemandePasseport.class, DemandePasseportId);
		if (d == null)
			throw new RuntimeException("Demande Passeport introuvable");
		return d;
	}

	/////////////////////////////////////////////////////////////////////////  

	// Traitement des DemandeImmatriculation
	// Ajouter une DemandeImmatriculation à la base de donnee
	@POST
	@Path("/AddDemandeImmatriculation")
	@Consumes({ "application/json" })
	public void AddDemandeImmatriculation(DemandeImmatriculation d) {
		em.persist(d);
	}

	// recuperer la liste des DemandeImmatriculation
	@GET
	@Path("/GetDemandeImmatriculation")
	@Produces({ "application/json" })
	public Collection<DemandeImmatriculation> GetDemandeImmatriculation() {
		return em.createQuery("from DemandeImmatriculation", DemandeImmatriculation.class).getResultList();
	}


	// Supprimer une DemandeImmatriculation
	@DELETE
	@Path("/DeleteDemandeImmatriculation/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public void DeleteDemandeImmatriculation(@PathParam("id") int DemandeImmatriculationId) {
		DemandeImmatriculation d = em.find(DemandeImmatriculation.class, DemandeImmatriculationId);
		if (d == null)
			throw new RuntimeException("Demande Immatriculation introuvable");
		em.remove(d);
	}

	// recuperer une DemandeImmatriculation à partir de son Id
	@GET
	@Path("/GetDemandeImmatriculationById/{id}")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public DemandeImmatriculation GetByIdDemandeImmatriculation(@PathParam("id") int DemandeImmatriculationId) {
		DemandeImmatriculation d = em.find(DemandeImmatriculation.class, DemandeImmatriculationId);
		if (d == null)
			throw new RuntimeException("Demande Immatriculation introuvable");
		return d;
	}
	

	
	@PUT
	@Path("AjouterDocumentCarteSejourByEmail/{e}/{url}")
	public void AjouterDocumentById(@PathParam("e") String e, @PathParam("url")String urls) {
		String[] listurl = urls.split("--");
		Login l = em.find(Login.class, e);
		Citoyen c = em.find(Citoyen.class, l.getIdLogin());
		Collection<Demande> ld = c.getDemande();
		for (Demande d : ld) {
			if (d.getTypeDemande().equals("carte")) {
				for (int i=0; i<listurl.length; i++) {
					UrlDocument u = new UrlDocument();
					u.setUrl(listurl[i]);
					em.persist(u);
					d.getDocuments().add(u);
				}
				em.merge(d);
			}
		}
	}
	
	@PUT
	@Path("AjouterDocumentImmatriculationByEmail/{e}/{url}")
	public void AjouterDocumentImmatriculationById(@PathParam("e") String e, @PathParam("url")String urls) {
		String[] listurl = urls.split("--");
		Login l = em.find(Login.class, e);
		Citoyen c = em.find(Citoyen.class, l.getIdLogin());
		Collection<Demande> ld = c.getDemande();
		for (Demande d : ld) {
			if (d.getTypeDemande().equals("immatriculation")) {
				for (int i=0; i<listurl.length; i++) {
					UrlDocument u = new UrlDocument();
					u.setUrl(listurl[i]);
					em.persist(u);
					d.getDocuments().add(u);
				}
				em.merge(d);
			}
		}
	}
	
	@PUT
	@Path("AjouterDocumentPasseportByEmail/{e}/{url}")
	public void AjouterDocumentPasseportById(@PathParam("e") String e, @PathParam("url")String urls) {
		String[] listurl = urls.split("--");
		Login l = em.find(Login.class, e);
		Citoyen c = em.find(Citoyen.class, l.getIdLogin());
		Collection<Demande> ld = c.getDemande();
		for (Demande d : ld) {
			if (d.getTypeDemande().equals("passeport")) {
				for (int i=0; i<listurl.length; i++) {
					UrlDocument u = new UrlDocument();
					u.setUrl(listurl[i]);
					em.persist(u);
					d.getDocuments().add(u);
				}
				em.merge(d);
			}
		}
	}
	
	@GET
    @Path("GetUrlById/{id}")
    @Produces({ "application/json" })
    public Collection<UrlDocument> GetUrlById(@PathParam("id") int id) {
        Collection<UrlDocument> urls = null;
        Demande demandes = em.find(Demande.class, id);
        if (demandes.getTypeDemande().equals("carte")) {
            urls = demandes.getDocuments();
        } else if (demandes.getTypeDemande().equals("passeport")) {
            urls = demandes.getDocuments();
        } else if (demandes.getTypeDemande().equals("immatriculation")) {
            urls = demandes.getDocuments();
        }
        return urls;
    }
	
	/*
	
	@PUT
	@Path("AjouterDocumentCarteSejourByEmail/{e}/{url}")
	public void AjouterDocumentById(@PathParam("e") String e, @PathParam("url")String urls) {
		String[] listurl = urls.split("--");
		Login l = em.find(Login.class, e);
		Citoyen c = em.find(Citoyen.class, l.getIdLogin());
		Collection<Demande> ld = c.getDemande();
		DemandeCarteSejour demande;
		for (Demande d : ld) {
			if (d.getTypeDemande().equals("carte")) {
				demande = d.getDemandeCarteSejour();
				System.out.println("\n\n\n"+demande.getId());
				System.out.println(listurl.length+"\n\n\n");
				for (int i=0; i<listurl.length; i++) {
					System.out.println(listurl[i]);
					UrlDocument u = new UrlDocument();
					u.setUrl(listurl[i]);
					em.persist(u);
					demande.getDocuments().add(u);
				}
				em.merge(demande);
			}
		}
	}
	
	
	@PUT
	@Path("AjouterDocumentImmatriculationByEmail/{e}/{url}")
	public void AjouterDocumentImmatriculationById(@PathParam("e") String e, @PathParam("url")String urls) {
		String[] listurl = urls.split("--");
		Login l = em.find(Login.class, e);
		Citoyen c = em.find(Citoyen.class, l.getIdLogin());
		Collection<Demande> ld = c.getDemande();
		DemandeImmatriculation demande;
		for (Demande d : ld) {
			if (d.getTypeDemande().equals("immatriculation")) {
				demande = d.getDemandeImmatriculation();
				for (int i=0; i< listurl.length; i++) {
					System.out.println(listurl[i]);
					UrlDocument u = new UrlDocument();
					u.setUrl(listurl[i]);
					em.persist(u);
					demande.getDocuments().add(u);
				}
				em.merge(demande);
			}
		}
	}
	
	@PUT
	@Path("AjouterDocumentPasseportByEmail/{e}/{url}")
	public void AjouterDocumentPasseportById(@PathParam("e") String e, @PathParam("url")String urls) {
		String[] listurl = urls.split("--");
		Login l = em.find(Login.class, e);
		Citoyen c = em.find(Citoyen.class, l.getIdLogin());
		Collection<Demande> ld = c.getDemande();
		DemandePasseport demande;
		for (Demande d : ld) {
			if (d.getTypeDemande().equals("passeport")) {
				demande = d.getDemandePasseport();
				for (int i=0; i<listurl.length; i++) {
					UrlDocument u = new UrlDocument();
					u.setUrl(listurl[i]);
					em.persist(u);
					demande.getDocuments().add(u);
				}
				em.merge(demande);
			}
		}
	}
	
	@GET
    @Path("GetUrlById/{id}")
    @Produces({ "application/json" })
    public Collection<UrlDocument> GetUrlById(@PathParam("id") int id) {
        Collection<UrlDocument> urls = null;
        Demande demandes = em.find(Demande.class, id);
        if (demandes.getTypeDemande().equals("carte")) {
            urls = demandes.getDemandeCarteSejour().getDocuments();
        } else if (demandes.getTypeDemande().equals("passeport")) {
            urls = demandes.getDemandePasseport().getDocuments();
        } else if (demandes.getTypeDemande().equals("immatriculation")) {
            urls = demandes.getDemandeImmatriculation().getDocuments();
        }
        return urls;
    }
	*/
	
	@GET
	@Path("NombreDemandeCarteSejour/{id}")
	@Consumes({ "application/json" })
	public int NombreDemandeCarteSejour(@PathParam("id") int id) {
		Citoyen c = em.find(Citoyen.class,id);
		Collection<Demande> demande = c.getDemande();
		int n = 0;
		for (Demande d : demande) {
			if (d.getTypeDemande().equals("carte")) {
				n++;
			}
		}
		return n;
	}
	
	@GET
	@Path("NombreDemandePasseport/{id}")
	@Consumes({ "application/json" })
	public int NombreDemandePasseport(@PathParam("id") int id) {
		Citoyen c = em.find(Citoyen.class,id);
		Collection<Demande> demande = c.getDemande();
		int n = 0;
		for (Demande d : demande) {
			if (d.getTypeDemande().equals("passeport")) {
				n++;
			}
		}
		return n;
	}
	
	@GET
	@Path("NombreDemandeImmatriculation/{id}")
	@Consumes({ "application/json" })
	public int NombreDemandeImmatriculation(@PathParam("id") int id) {
		Citoyen c = em.find(Citoyen.class,id);
		Collection<Demande> demande = c.getDemande();
		int n = 0;
		for (Demande d : demande) {
			if (d.getTypeDemande().equals("immatriculation")) {
				n++;
			}
		}
		return n;
	}
	
	
	

	@PUT
	@Path("AddCVCandidature/{id}/{url}")
	public void AddCVCandidature(@PathParam("id") int id, @PathParam("url")String url) {
		Candidature c = em.find(Candidature.class, id);
		UrlDocument u = new UrlDocument();
		u.setUrl(url);
		em.persist(u);
		c.setCVCandidature(u);
		em.merge(c);
	}
	
	
	@GET
    @Path("GetCandidatureIdByIdOffre/{id}/{idCitoyen}")
    @Produces({ "application/json" })
    public int GetIdCandidatureByIdOffre(@PathParam("id") int id,@PathParam("idCitoyen") int idCitoyen ) {
		int res = 0;
		Offre offre = em.find(Offre.class, id);
		Collection<Candidature> candidatures = offre.getCandidature();
		for (Candidature c : candidatures) {
			if (c.getCitoyen().getId() == idCitoyen) {
				res = c.getId();
				break;
			}
		}
		return res;
    }




}