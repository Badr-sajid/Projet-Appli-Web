package pack;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class DemandePasseport {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String genre;
	private String nom;
	private String prenom;
	private String adresse;
	private String datedenaissance;
	private String lieudenaissance;
	private String statut;
	private String remarque;
	
	//@OneToMany(cascade = CascadeType.ALL)
	//private Collection<UrlDocument> documents;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public String getDatedenaissance() {
		return datedenaissance;
	}
	public void setDatedenaissance(String datedenaissance) {
		this.datedenaissance = datedenaissance;
	}
	public String getLieudenaissance() {
		return lieudenaissance;
	}
	public void setLieudenaissance(String lieudenaissance) {
		this.lieudenaissance = lieudenaissance;
	}
	public String getStatut() {
		return statut;
	}
	public void setStatut(String statut) {
		this.statut = statut;
	}
	public String getRemarque() {
		return remarque;
	}
	public void setRemarque(String remarque) {
		this.remarque = remarque;
	}/*
	public Collection<UrlDocument> getDocuments() {
		return documents;
	}
	public void setDocuments(Collection<UrlDocument> documents) {
		this.documents = documents;
	}*/

}