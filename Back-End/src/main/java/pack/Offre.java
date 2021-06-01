package pack;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Offre implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String titre;
	private String description;
	private String nomEntreprise;
	private String typeDePoste;
	private String duree;
	private String remuneration;
	private String dateDebut;
	private String postePourvu;

	@OneToMany(mappedBy = "offre",fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JsonIgnore
	private Collection<Candidature> candidature;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getNomEntreprise() {
		return nomEntreprise;
	}

	public void setNomEntreprise(String nomEntreprise) {
		this.nomEntreprise = nomEntreprise;
	}

	public String getTypeDePoste() {
		return typeDePoste;
	}

	public void setTypeDePoste(String typeDePoste) {
		this.typeDePoste = typeDePoste;
	}

	public String getDuree() {
		return duree;
	}

	public void setDuree(String duree) {
		this.duree = duree;
	}

	public String getRemuneration() {
		return remuneration;
	}

	public void setRemuneration(String remuneration) {
		this.remuneration = remuneration;
	}

	public String getDateDebut() {
		return dateDebut;
	}

	public void setDateDebut(String dateDebut) {
		this.dateDebut = dateDebut;
	}

	public String getPostePourvu() {
		return postePourvu;
	}

	public void setPostePourvu(String postePourvu) {
		this.postePourvu = postePourvu;
	}

	public Collection<Candidature> getCandidature() {
		return candidature;
	}

	public void setCandidature(Collection<Candidature> candidature) {
		this.candidature = candidature;
	}

}
