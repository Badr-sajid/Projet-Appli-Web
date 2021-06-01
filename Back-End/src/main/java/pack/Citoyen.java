package pack;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Citoyen implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String civilite;
	private String nom;
	private String prenom;
	@OneToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	private Contact contact;
	private String dateDeNaissance;
	private String lieuDeNaissance;
	private String nationalite;
	private String statut;
	
	@Column(nullable = true)
	private String remarques;

	@OneToMany(mappedBy = "citoyen", cascade = CascadeType.ALL)
	@JsonIgnore
	private Collection<Plainte> plaintes;
	
	@OneToOne(mappedBy = "citoyen", fetch = FetchType.LAZY)
	@JsonIgnore
	private Fonctionnaire fonctionnaire;
	
	@OneToMany(mappedBy = "citoyen", cascade = CascadeType.ALL)
	@JsonIgnore
	private Collection<Demande> demande;
	
	@OneToMany(mappedBy = "citoyen", cascade = CascadeType.ALL)
	@JsonIgnore
	private Collection<Question> question;
	
	
	@OneToMany(mappedBy = "citoyen", cascade = CascadeType.ALL)
	@JsonIgnore
	private Collection<Candidature> candidature;


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getCivilite() {
		return civilite;
	}


	public void setCivilite(String civilite) {
		this.civilite = civilite;
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


	public Contact getContact() {
		return contact;
	}


	public void setContact(Contact contact) {
		this.contact = contact;
	}


	public String getDateDeNaissance() {
		return dateDeNaissance;
	}


	public void setDateDeNaissance(String dateDeNaissance) {
		this.dateDeNaissance = dateDeNaissance;
	}


	public String getLieuDeNaissance() {
		return lieuDeNaissance;
	}


	public void setLieuDeNaissance(String lieuDeNaissance) {
		this.lieuDeNaissance = lieuDeNaissance;
	}


	public String getNationalite() {
		return nationalite;
	}


	public void setNationalite(String nationalite) {
		this.nationalite = nationalite;
	}


	public String getStatut() {
		return statut;
	}


	public void setStatut(String statut) {
		this.statut = statut;
	}


	public String getRemarques() {
		return remarques;
	}


	public void setRemarques(String remarques) {
		this.remarques = remarques;
	}


	public Collection<Plainte> getPlaintes() {
		return plaintes;
	}


	public void setPlaintes(Collection<Plainte> plaintes) {
		this.plaintes = plaintes;
	}


	public Fonctionnaire getFonctionnaire() {
		return fonctionnaire;
	}


	public void setFonctionnaire(Fonctionnaire fonctionnaire) {
		this.fonctionnaire = fonctionnaire;
	}


	public Collection<Demande> getDemande() {
		return demande;
	}


	public void setDemande(Collection<Demande> demande) {
		this.demande = demande;
	}


	public Collection<Candidature> getCandidature() {
		return candidature;
	}


	public void setCandidature(Collection<Candidature> candidature) {
		this.candidature = candidature;
	}



}
