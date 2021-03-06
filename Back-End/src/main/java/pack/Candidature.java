package pack;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Candidature implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@ManyToOne
	private Offre offre;
	
	@ManyToOne
	private Citoyen citoyen;
	
	private String etat;
	
	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JsonIgnore
	private UrlDocument CVCandidature;
	

	public UrlDocument getCVCandidature() {
		return CVCandidature;
	}

	public void setCVCandidature(UrlDocument cVCandidature) {
		CVCandidature = cVCandidature;
	}
	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Offre getOffre() {
		return offre;
	}

	public void setOffre(Offre offre) {
		this.offre = offre;
	}

	public Citoyen getCitoyen() {
		return citoyen;
	}

	public void setCitoyen(Citoyen citoyen) {
		this.citoyen = citoyen;
	}

	public String getEtat() {
		return etat;
	}

	public void setEtat(String etat) {
		this.etat = etat;
	}
}
