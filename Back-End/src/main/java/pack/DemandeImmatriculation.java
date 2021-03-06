package pack;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class DemandeImmatriculation {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)	
	private int id;
	private String genre;
	private String nom;
	private String prenom;
	private String adresse;
	private String datedenaissance;
	private String lieudenaissance;
	private String dateAchat;
	private String dateCertificat;
	private String dateImmatriculation1;
	private String numeroFormulaire;
	private String denominationCommerciale;
	private String typeVersion;
	private String numeroVehicule;
	private String genreNational;
	private String numeroExploitation;
	private String nuanceCouleur;
	private String couleurDominant;
	
	//@OneToMany(cascade = CascadeType.ALL)
	//private Collection<UrlDocument> documents;
	
	
	private int numeroImmatriculation;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}

	public int getNumeroImmatriculation() {
		return numeroImmatriculation;
	}
	public void setNumeroImmatriculation(int numeroImmatriculation) {
		this.numeroImmatriculation = numeroImmatriculation;
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
	public String getDateAchat() {
		return dateAchat;
	}
	public void setDateAchat(String dateAchat) {
		this.dateAchat = dateAchat;
	}
	public String getDateCertificat() {
		return dateCertificat;
	}
	public void setDateCertificat(String dateCertificat) {
		this.dateCertificat = dateCertificat;
	}
	public String getDateImmatriculation1() {
		return dateImmatriculation1;
	}
	public void setDateImmatriculation1(String dateImmatriculation1) {
		this.dateImmatriculation1 = dateImmatriculation1;
	}
	public String getNumeroFormulaire() {
		return numeroFormulaire;
	}
	public void setNumeroFormulaire(String numeroFormulaire) {
		this.numeroFormulaire = numeroFormulaire;
	}
	public String getDenominationCommerciale() {
		return denominationCommerciale;
	}
	public void setDenominationCommerciale(String denominationCommerciale) {
		this.denominationCommerciale = denominationCommerciale;
	}
	public String getTypeVersion() {
		return typeVersion;
	}
	public void setTypeVersion(String typeVersion) {
		this.typeVersion = typeVersion;
	}
	public String getNumeroVehicule() {
		return numeroVehicule;
	}
	public void setNumeroVehicule(String numeroVehicule) {
		this.numeroVehicule = numeroVehicule;
	}
	public String getGenreNational() {
		return genreNational;
	}
	public void setGenreNational(String genreNational) {
		this.genreNational = genreNational;
	}
	public String getNumeroExploitation() {
		return numeroExploitation;
	}
	public void setNumeroExploitation(String numeroExploitation) {
		this.numeroExploitation = numeroExploitation;
	}
	public String getNuanceCouleur() {
		return nuanceCouleur;
	}
	public void setNuanceCouleur(String nuanceCouleur) {
		this.nuanceCouleur = nuanceCouleur;
	}
	public String getCouleurDominant() {
		return couleurDominant;
	}
	public void setCouleurDominant(String couleurDominant) {
		this.couleurDominant = couleurDominant;
	}/*
	public Collection<UrlDocument> getDocuments() {
		return documents;
	}
	public void setDocuments(Collection<UrlDocument> documents) {
		this.documents = documents;
	}*/

}