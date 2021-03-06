package pack;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class DemandeCarteSejour {
	
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
	private String revenumensuel;
	private String nationnalite;
	
	//@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	//private Collection<UrlDocument> documents;

	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public String getNationnalite() {
		return nationnalite;
	}
	public void setNationnalite(String nationnalite) {
		this.nationnalite = nationnalite;
	}
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
	public String getRevenumensuel() {
		return revenumensuel;
	}
	public void setRevenumensuel(String revenumensuel) {
		this.revenumensuel = revenumensuel;
	}
	/*
	public Collection<UrlDocument> getDocuments() {
		return documents;
	}
	public void setDocuments(Collection<UrlDocument> documents) {
		this.documents = documents;
	}*/
}